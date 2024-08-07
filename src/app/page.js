"use client"
//Importa el componente Head desde 'next/head', que se utiliza para modificar el <head> de la página
import Head from 'next/head';

//Importa el componente Chatbot desde el archivo especificado en la ruta '../app/components/Chatbot'
import Chatbot from '../app/components/Chatbot';

//Importa los estilos desde el archivo CSS especificado en la ruta '../app/styles/Home.module.css'
import styles from '../app/styles/Home.module.css';
import Mapa from '../app/components/Mapa';

// Define un componente funcional llamado Home
// Devuelve un contenedor <div> con una clase de estilo aplicada desde el archivo CSS importado
// El componente Head de Next.js permite modificar el <head> de la página, incluyendo el título y el ícono de la pestaña
// El componente principal de la página, con una clase de estilo aplicada
 // Un título <h1> con una clase de estilo aplicada, mostrando un mensaje de bienvenida
// El componente Chatbot, que probablemente contiene la funcionalidad del chatbot
export default function Home() {
    return (        
        <div className={styles.container}>      
            <Head>
                <title>Chatbot de Soporte</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>     
                         
                <h1 className={styles.title}>Bienvenido al Chatbot de Soporte</h1>          
                <Chatbot />
                
                
            </main>
     
        </div>
        
    );
}
