
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import TimelineItem from '../components/TimelineItem';
import { ThemeContext } from '../App';
import './Timeline.css';
import { Fade } from 'react-awesome-reveal';

const ExperienceTimeline = () => {
  const { resolvedTheme } = useContext(ThemeContext);

  const items = [
    {
      title: "Jan. 2020 - Fév. 2020",
      cardTitle: "Stagiaire",
      cardSubtitle: "Aleda, Challans, Pays de la Loire, France",
      cardDetailedText: "Développement iOS"
    },
    {
      title: "Été 2020",
      cardTitle: "Auto-entrepreneur",
      cardSubtitle: "DCS - Saint-Jean-de-Monts, Pays de la Loire, France",
      cardDetailedText: "Gestion du mini golf, bar, salle de jeu"
    },
    {
      title: "Sep. 2020 - Sep.2023",
      cardTitle: "Analyste Développeur",
      cardSubtitle: "Huet - Contrat d'alternance, Challans, Pays de la Loire, France",
      cardDetailedText: ""
    },    
    {
      title: "Oct. 2023 - Aujourd'hui",
      cardTitle: "Analyste Développeur",
      cardSubtitle: "Huet - CDI, Challans, Pays de la Loire, France",
      cardDetailedText: ""
    }
  ];

  return (
    <Container id="experience" className="py-5">
      <h2 className="text-center mb-5">Mon Parcours Professionnel</h2>
      <div className="timeline-container">
        {items.map((item, index) => (
          <Fade key={index} triggerOnce delay={index * 400}>
            <div className="timeline-item">
              <div className="timeline-item-line"></div>
              <div className="timeline-item-dot"></div>
              <TimelineItem {...item} />
            </div>
          </Fade>
        ))}
      </div>
    </Container>
  );
};

export default ExperienceTimeline;
