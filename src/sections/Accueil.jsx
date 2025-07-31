
import React, { useContext } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../App';

import myImage from '../assets/me.jpg';

const Accueil = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container fluid className="text-center vh-100 d-flex flex-column justify-content-center position-relative">
      <Button
        variant={theme === 'light' ? 'dark' : 'light'}
        onClick={toggleTheme}
        className="position-absolute top-0 end-0 m-3"
      >
        Basculer le thème
      </Button>
      <Row>
        <Col>
          <Image src={myImage} roundedCircle width="150" />
          <h1 className="mt-3">Doryan Chaigneau</h1>
          <p className="lead">Développeur Web Full Stack</p>
          <p>
            Passionné par la création d'applications web performantes et intuitives.
          </p>
          <div>
            <a href="https://github.com/chaigneaudoryan" target="_blank" rel="noopener noreferrer" className={`me-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/doryan-chaigneau/" target="_blank" rel="noopener noreferrer" className={`me-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              <FaLinkedin size={30} />
            </a>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
