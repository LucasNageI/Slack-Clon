import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import { Messages } from './Messages/Messages.jsx';
import { NewMessage } from './NewMessage/NewMessage.jsx';
import { getChannel, getMook, saveMook } from '../../../localStorageFns.js';

export const Content = ({ workspace_id }) => {
    const { channel_id } = useParams()

    const mook = getMook()

    const [current_messages, setCurrentMessages] = useState([]) /* como valor default tiene un [] porque en el MOOK los canales sin mensajes tienen un array vacio */
    const [channel_name, setChannelName] = useState('') /* como valor default tiene un '' porque cuando cambie el estado, va a contener un string, en caso de que no encuentre el canal para setear el nombre, el nombre del canal seguira estando vacio */

    useEffect(() => {
        const channel_obj = getChannel(channel_id, workspace_id)
        if (channel_obj) {
            setCurrentMessages(channel_obj.messages) /* setea los mensajes */
            setChannelName(channel_obj.name) /* setea el nombre del canal en el que se clickeo */
        }
    }, [channel_id, workspace_id]) /* cada vez que cambie channel_id o workspace_id, se ejecuta el efecto */

    const addNewMessage = (text) => {
        const new_message_object = {
            id: current_messages.length + 1,
            author: mook.user_info.username,
            author_img: mook.user_info.profile_img,
            date: 'now', /* intente poner la hora local, pero no supe como cambiar la hora que devolvia new Date().toISOString() */
            text: text
        }

        const updated_nessages = [...current_messages, new_message_object]
        setCurrentMessages(updated_nessages)

        const workspace = mook.workspaces.find((find_workspace) => {
            return find_workspace.id === workspace_id
        })

        if (workspace) { /* si workspace es truthly: */
            const channel = workspace.channels.find((find_channel) => {
                return find_channel.id === channel_id
            })

            if (channel) { /* si channel es truthly: */
                channel.messages = updated_nessages
                saveMook(mook)
            }
        }
    }

    return (
        <section className='content-section'>
            <div className='accessibility-info'>
                <span className='accessibility-span-name'>
                    <i className="bi bi-hash"></i>{channel_name}
                </span>
            </div>
            <div className='messages'>
                <Messages messages_info={current_messages} />
            </div>
            <div className='new-message'>
                <NewMessage addNewMessage={addNewMessage} />
            </div>
        </section>
    )
}
