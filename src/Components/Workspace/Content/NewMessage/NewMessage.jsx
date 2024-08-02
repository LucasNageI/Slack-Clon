import React from 'react'
import './NewMessage.css'

export const NewMessage = ({ addNewMessage }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const new_message = e.target["message_input"].value

        if (new_message) { /* verifica que el input no este vacio */
            addNewMessage(new_message) /* envia el texto al objeto para luego agregar el nuevo mensaje */
            e.target["message_input"].value = '' /* resetea el valor del input */
        }
    }

    return (
        <form onSubmit={handleSubmit} className='message-input-container'>
            <input className='message-input' type="text" name="message_input" id="message_input" placeholder='Message' autoComplete='off' />
            <button type='submit'><i className="bi bi-send send-icon"></i></button>
        </form>
    )
}