import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import TimelineItem from '../components/TimelineItem';
import { ThemeContext } from '../App';
import './Timeline.css';
import { Fade } from 'react-awesome-reveal';

const EducationTimeline = () => {
  const { resolvedTheme } = useContext(ThemeContext);

  const items = [
    {
      title: "2018 - 2020",
      cardTitle: "BTS SIO",
      cardSubtitle: "Notre Dame Du Roc, La Roche-sur-Yon, Pays de la Loire, France",
      cardDetailedText: "Développement informatique"
    },
    {
      title: "2020 - 2021",
      cardTitle: "RNCP II : Titre CDA",
      cardSubtitle: "EPSI, Nantes, Pays de la Loire, France",
      cardDetailedText: "Développement informatique"
    },
    {
      title: "2021 - 2023",
      cardTitle: "RNCP VII : Titre EISI",
      cardSubtitle: "EPSI, Nantes, Pays de la Loire, France",
      cardDetailedText: "Développement informatique"
    }
  ];

  return (
    <Container id="education" className="py-5">
      <h2 className="text-center mb-5">Mon Parcours Scolaire</h2>
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

export default EducationTimeline;