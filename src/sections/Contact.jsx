import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sendResult, setSendResult] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendResult(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setSendResult({ success: true, message: 'Message envoyé avec succès !' });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setSendResult({ success: false, message: 'Une erreur est survenue. Veuillez réessayer.' });
      });
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Contact</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" name="name" placeholder="Votre nom" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Entrez votre email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} placeholder="Votre message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
          {sendResult && (
            <Alert variant={sendResult.success ? 'success' : 'danger'} className="mt-3">
              {sendResult.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;