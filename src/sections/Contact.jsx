
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Contact</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Votre message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
