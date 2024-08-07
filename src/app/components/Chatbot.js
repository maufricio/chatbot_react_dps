"use client"; // Indica que el código es para el cliente (navegador), no para el servidor

// Importa las bibliotecas necesarias
import React, { useState } from 'react'; // React para crear componentes, useState para manejar estados
import axios from 'axios'; // Axios para hacer solicitudes HTTP
import styles from '../styles/Chatbot.module.css'; // Importa los estilos específicos para el chatbot
import Mapa from "../components/Mapa"

// Define el componente Chatbot
const Chatbot = () => {
    // Define dos estados: uno para los mensajes y otro para el texto del input
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Función para manejar el envío de mensajes
    const handleSend = async () => {
        // Verifica si el input no está vacío después de eliminar los espacios en blanco
        if (input.trim()) {
            // Crea un mensaje de usuario con el texto del input
            const userMessage = { text: input, sender: 'user' };
            // Actualiza el estado de mensajes, agregando el nuevo mensaje del usuario
            setMessages([...messages, userMessage]);

            try {
                // Envía el mensaje del usuario al backend y espera la respuesta del bot
                const response = await axios.post('/api/chat', { message: input });
                // Crea un mensaje del bot con la respuesta obtenida del backend
                const botMessage = { text: response.data.reply, sender: 'bot' };
                // Actualiza el estado de mensajes, agregando el mensaje del usuario y la respuesta del bot
                setMessages([...messages, userMessage, botMessage]);
            } catch (error) {
                // En caso de error al enviar el mensaje, imprime el error en la consola
                console.error('Error sending message:', error);
            }

            // Limpia el input después de enviar el mensaje
            setInput('');
        }
    };

    // Renderiza el componente Chatbot
   // Renderiza cada mensaje en la ventana de chat, con una clase de estilo específica según el remitente
   // Actualiza el estado del input con el valor del campo de texto
   // Envía el mensaje si se presiona Enter
   // Botón para enviar el mensaje
    return (
        <div className={styles.chatbot}>
            <div className={styles.chatWindow}>
                {messages.map((msg, index) => (               
                    <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                        {msg.text}
                        {typeof msg.text === 'string' && msg.text.toLowerCase().includes('biblioteca') && (
                            <Mapa></Mapa>
                        )}
                    </div>

                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
                    className={styles.input}
                />
                <button onClick={handleSend} className={styles.button}>Send</button> 
            </div>
        </div>
    );
};

export default Chatbot; // Exporta el componente Chatbot para que pueda ser utilizado en otros lugares
