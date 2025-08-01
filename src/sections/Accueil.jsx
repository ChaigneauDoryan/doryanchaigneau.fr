
import React, { useContext } from 'react';
import { Container, Row, Col, Image, Dropdown } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { ThemeContext } from '../App';
import './Accueil.css';

import myImage from '../assets/me.jpg';

const Accueil = () => {
  const { theme, resolvedTheme, changeTheme } = useContext(ThemeContext);

  const getThemeName = () => {
    if (theme === 'light') return 'Clair';
    if (theme === 'dark') return 'Sombre';
    return 'Système';
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container fluid className="text-center vh-100 d-flex flex-column justify-content-center position-relative">
      <Dropdown className="position-absolute top-0 end-0 m-3">
        <Dropdown.Toggle variant={resolvedTheme === 'dark' ? 'light' : 'dark'} id="dropdown-basic">
          Thème : {getThemeName()}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeTheme('light')}>Clair</Dropdown.Item>
          <Dropdown.Item onClick={() => changeTheme('dark')}>Sombre</Dropdown.Item>
          <Dropdown.Item onClick={() => changeTheme('system')}>Système</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        <Col>
          <Image src={myImage} roundedCircle width="150" />
          <h1 className="mt-3">Doryan Chaigneau</h1>
          <p className="lead">Développeur Web Full Stack</p>
          <p>
            Passionné par la création d'applications web performantes et intuitives.
          </p>
          <div>
            <a href="https://github.com/chaigneaudoryan" target="_blank" rel="noopener noreferrer" className={`me-3 ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}`}>
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/doryan-chaigneau-523b8019b/" target="_blank" rel="noopener noreferrer" className={`me-3 ${resolvedTheme === 'dark' ? 'text-light' : 'text-dark'}`}>
              <FaLinkedin size={30} />
            </a>
            
          </div>
        </Col>
      </Row>
      <div className="down-arrow" onClick={scrollToExperience}>
        <FaChevronDown size={40} className={resolvedTheme === 'dark' ? 'text-light' : 'text-dark'} />
      </div>
    </Container>
  );
};

export default Accueil;
