import React, { useEffect, useState, useRef } from "react";
import ChatBot from "react-simple-chatbot";
import styles from "./ButtonBot.module.css";
import { ThemeProvider } from "styled-components";
import { BsChatRightDots } from "react-icons/bs";

const ButtonBot = () => {
  const [chatbot, setChatbot] = useState(false);
  const chatbotRef = useRef(null);
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#3a6f84",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#3a6f84",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setChatbot(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatbotRef]);
  const steps = [
    {
      id: "1",
      message: "¿Cuál es tu nombre?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: `Hola {previousValue}, encantado de conocerte! Aquí hay algunas opciones para usted:`,
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Quiero reservar un lugar", trigger: "5" },
        { value: 2, label: "Sobre Goto Machu Pichu", trigger: "6" },

        {
          value: 3,
          label: "Quiero que me realizen una cotización",
          trigger: "7",
        },
        { value: 4, label: "¿Cómo funciona la web?", trigger: "8" },
      ],
    },

    {
      id: "5",
      message:
        "Para realizar una reservación, primero deberá registrarse, iniciar sesión y seleccionar el lugar que desee reservar.",
      trigger: "10",
    },
    {
      id: "6",
      message:
        "Somos una agencia de turismo donde encontrarás una amplia variedad de paquetes para los mejores tours en Perú. Si quieres saber más, ingresa a la sección 'Sobre nosotros'.",
      trigger: "10",
    },

    {
      id: "7",
      message:
        "Para solicitar una cotización, haz clic en el botón de cotización, completa el formulario y envíalo. Una vez enviado, te responderemos en un plazo máximo de 24 horas o nos comunicaremos contigo a través de cualquier medio de comunicación.",
      trigger: "10",
    },

    {
      id: "8",
      message: `
    Nuestra web es fácil e interactiva, donde puedes realizar una reservación en 2 simples pasos: ingresar y reservar. Podrán ver los detalles de cada lugar turistico, para informarse y poder reservar lo que usted desee.`,
      trigger: "10",
    },

    {
      id: "10",
      message: "¿Te puedo ayudar en algo mas?",
      trigger: "11",
    },
    {
      id: "11",
      options: [
        { value: 1, label: "Si", trigger: "12" },
        { value: 2, label: "No", trigger: "13" },
      ],
    },

    {
      id: "12",
      message: `¿En que te puedo ayudar?`,
      trigger: "4",
    },

    {
      id: "13",
      message: `Espero que te haya sido de ayuda. ¡Muchas gracias!`,
      end: true,
    },
  ];
  return (
    <>
      <div className={styles.btnChat} onClick={() => setChatbot(!chatbot)}>
        <BsChatRightDots className={styles.icon_chatbot} />
      </div>
      {chatbot && (
        <div className={styles.chatbot} ref={chatbotRef}>
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default ButtonBot;
