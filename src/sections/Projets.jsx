import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ThemeContext } from '../App';

const Projets = () => {
  const { resolvedTheme } = useContext(ThemeContext);

  const projets = [
    {
      titre: 'Projet 1',
      description: 'Description du projet 1.',
      lien: 'https://github.com/chaigneaudoryan/projet-1'
    },
    {
      titre: 'Projet 2',
      description: 'Description du projet 2.',
      lien: 'https://github.com/chaigneaudoryan/projet-2'
    },
    {
      titre: 'Projet 3',
      description: 'Description du projet 3.',
      lien: 'https://github.com/chaigneaudoryan/projet-3'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Projets Personnels</h2>
      <Row>
        {projets.map((projet, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4" bg={resolvedTheme === 'dark' ? 'dark' : 'light'} text={resolvedTheme === 'dark' ? 'white' : 'dark'}>
              <Card.Body>
                <Card.Title>{projet.titre}</Card.Title>
                <Card.Text>{projet.description}</Card.Text>
                <Button variant="primary" href={projet.lien} target="_blank">Voir sur GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projets;