

import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEye, FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../App';

const Projets = () => {
  const { resolvedTheme } = useContext(ThemeContext);

  const projets = [
    {
      titre: 'Devco-Agro',
      description: 'Site vitrine pour un consultant indépendant dans le secteur agroalimentaire. Accompagnement, développement commercial et innovation.',
      lienSite: 'https://devco-agro.com/',
      lienGithub: 'https://github.com/ChaigneauDoryan/devco-agro.com'
    },
    {
      titre: 'Location Gourette',
      description: 'Site de présentation pour la location d\'un studio de 30m² entièrement rénové à Gourette, au pied des pistes.',
      lienSite: 'https://locationgourette.fr',
      lienGithub: 'https://github.com/ChaigneauDoryan/locationgourette.fr'
    },
    {
      titre: 'Calendz',
      description: 'Projet permettant de suivre l\'emploi du temps de l\'EPSI avec d\'autres possibilités (gestion des notes, pense-bêtes...). Contribution à 4 dépôts publics.',
      lienSite: null,
      lienGithub: [
        { label: 'Front', url: 'https://github.com/ChaigneauDoryan/calendz-front' },
        { label: 'API', url: 'https://github.com/ChaigneauDoryan/calendz-api' },
        { label: 'Conf', url: 'https://github.com/ChaigneauDoryan/calendz-conf' },
        { label: 'API Calendar', url: 'https://github.com/ChaigneauDoryan/calendz-api-calendar' }
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Projets Personnels</h2>
      <Row className="justify-content-center">
        {projets.map((projet, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card bg={resolvedTheme === 'dark' ? 'dark' : 'light'} text={resolvedTheme === 'dark' ? 'white' : 'dark'} className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{projet.titre}</Card.Title>
                <Card.Text className="flex-grow-1">{projet.description}</Card.Text>
                <div>
                  {projet.lienSite && (
                    <Button variant="primary" href={projet.lienSite} target="_blank" className="me-2">
                      <FaEye className="me-2" /> Visiter
                    </Button>
                  )}
                  {projet.lienGithub && Array.isArray(projet.lienGithub) ? (
                    <>
                      <div className="d-flex flex-wrap justify-content-start">
                        <Button variant="secondary" href={projet.lienGithub[0].url} target="_blank" className="me-2 mb-2">
                          <FaGithub className="me-2" /> {projet.lienGithub[0].label}
                        </Button>
                        <Button variant="secondary" href={projet.lienGithub[1].url} target="_blank" className="me-2 mb-2">
                          <FaGithub className="me-2" /> {projet.lienGithub[1].label}
                        </Button>
                      </div>
                      <div className="d-flex flex-wrap justify-content-start">
                        <Button variant="secondary" href={projet.lienGithub[2].url} target="_blank" className="me-2 mb-2">
                          <FaGithub className="me-2" /> {projet.lienGithub[2].label}
                        </Button>
                        <Button variant="secondary" href={projet.lienGithub[3].url} target="_blank" className="me-2 mb-2">
                          <FaGithub className="me-2" /> {projet.lienGithub[3].label}
                        </Button>
                      </div>
                    </>
                  ) : (
                    projet.lienGithub && (
                      <Button variant="secondary" href={projet.lienGithub} target="_blank">
                        <FaGithub className="me-2" /> GitHub
                      </Button>
                    )
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projets;
