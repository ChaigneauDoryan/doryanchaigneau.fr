
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Expérience Professionnelle</h2>
      <Row>
        <Col md={6}>
          <h4>Développeur Web @ Entreprise A</h4>
          <p><em>Janvier 2022 - Présent</em></p>
          <ul>
            <li>Développement et maintenance d'applications web en React et Node.js.</li>
            <li>Participation à la conception de nouvelles fonctionnalités.</li>
            <li>Collaboration avec les équipes de design et de produit.</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4>Développeur Web Junior @ Entreprise B</h4>
          <p><em>Juin 2020 - Décembre 2021</em></p>
          <ul>
            <li>Développement de sites web vitrines en HTML, CSS et JavaScript.</li>
            <li>Intégration de maquettes graphiques.</li>
            <li>Maintenance de sites existants.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
