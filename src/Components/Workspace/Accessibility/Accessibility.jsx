import React, { useState } from 'react'
import "./Accessibility.css"
import { Channels } from './Channels/Channels'
import { getMook, saveMook } from '../../../localStorageFns.js'

export const Accessibility = ({ workspace_id }) => {

    const mook = getMook() /* obtiene el mook */

    const channels = mook.workspaces[workspace_id - 1].channels /* crea la variable channels que es igual al array de channels del workspace actual */

    const [is_setting_channel, setChannelInterface] = useState(false) /* useState para desplegar el form de agregar un canal */
    const [channel_name_error, setChannelNameError] = useState(false) /* useState para manejar posibles errores al darle un nombre al canal */

    const [current_channels, setCurrentChannels] = useState(channels) /* setea el canal creado */

    const handleNewChannel = () => {
        setChannelInterface(!is_setting_channel) /* desplega la interfaz para crear un canal si no esta desplegada, y si lo esta, la cierra */
    }

    const handleNewChannelForm = (e) => {
        e.preventDefault()
        let channel_input_name = e.target["channel_name"].value.trim() /* creo una variable con el valor ingresado en el input y le saca los espacios del inicio, del final y repetidos */

        let channel_exists = current_channels.some((channel) => { /* inspecciona el array de canales y devuelve true si el input ingresado es igual a un canal ya existente */
            return channel.name === channel_input_name
        })

        if (channel_exists || channel_input_name.length < 2 || channel_input_name.length > 15) { /* verifica que tenga entre 2 y 15 caracteres, y si el canal existe */
            setChannelNameError(true) /* muestra el error */
        }
        else {
            setChannelNameError(false) /* oculta el error */

            const new_channel_object = { /* creo el objeto donde se van a almacenar los datos del canal */
                id: current_channels.length + 1,
                name: channel_input_name,
                messages: []
            }

            const updated_channels = [...current_channels, new_channel_object] /* clono los canales existentes, y le agrego el objeto recien creado */
            setCurrentChannels(updated_channels) /* seteo los canales junto con el canal ingresado */

            const updated_mook = getMook() /* obtengo el mook ya modificado */

            const workspace_index = updated_mook.workspaces.findIndex((workspace) => { /* busca el indice del workspace en el que se quiere crear el canal */
                return workspace.id === Number(workspace_id)
            })

            if (workspace_index !== -1) { /* comprueba que el indice sea valido */
                updated_mook.workspaces[workspace_index].channels = updated_channels /* reemplaza el array de canales viejo por el modificado */

                saveMook(updated_mook) /* y guarda el mook modificado en el localStorage */
            } /* si el indice no es valido, no se guarda */

            e.target["channel_name"].value = '' /* resetea el valor del input */
        }
    }

    return (
        <section className='accessibility'>
            <div className='accessibility-workspace-name-container'>
                <button className='accessibility-workspace-name-btn'>
                    <span className='accessibility-workspace-name'>{mook.workspaces[workspace_id - 1].name}</span>
                </button>
            </div>
            <div className='top-accessibility-btns-container'>
                <button className='top-accessibility-btns'>
                    <i className="bi bi-chat-text"></i>
                    <span className='accessibility-btns-span'>Threads</span>
                </button>
                <button className='top-accessibility-btns'>
                    <i className="bi bi-send"></i>
                    <span className='accessibility-btns-span'>Drafts & sent</span>
                </button>
            </div>
            <div className='channels-main-container'>
                <button>
                    <span className='channels-span-title'><i className="bi bi-caret-down-fill"></i> Channels</span>
                </button>
                <div className='channels-container'>
                    <Channels channels={current_channels} />
                </div>
                <div className='create-new-channel-container'>
                    <button className='accessibility-create-channel' onClick={handleNewChannel}>
                        <span className='add-channels-span'><i className="bi bi-plus"></i> Add channels</span>
                    </button>
                    <form onSubmit={handleNewChannelForm} className={`channel-name-${is_setting_channel}`}>
                        <label className='channel-name-label' htmlFor="channel_name">Channel name may have between 2 and 15 characters.</label>
                        <input className='channel-name-input' type="text" id='channel_name' name='channel_name' placeholder='#channel' autoComplete='off' />
                        <span className={`channel-name-error-${channel_name_error}`}>incorrect channel name or channel already exists</span>
                        <button className='submit-new-channel-btn' type='submit'>Create channel</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
