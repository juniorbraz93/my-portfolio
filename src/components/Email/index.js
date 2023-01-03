import React, { useState } from 'react';
import { Container, Title, Form, Input, TextArea, Button } from './styles'

import emailjs from '@emailjs/browser';

function Email() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }
    const  templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_oszqo5n', 'template_yxt5f6p', templateParams, 'bU5CUl8Y91mmdDrr0')
      .then((result) => {
        console.log('Email enviado', result.status, result.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <Container>
      <Title>Contato</Title>

      <Form onSubmit={sendEmail}>
        <Input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <Input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextArea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button className="button" type="submit" value="Enviar" />
      </Form>

    </Container>
  );
}

export default Email;