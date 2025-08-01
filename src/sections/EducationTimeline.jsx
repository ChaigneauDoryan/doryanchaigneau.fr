
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import TimelineItem from '../components/TimelineItem';
import { ThemeContext } from '../App';
import './Timeline.css';

const EducationTimeline = () => {
  const { resolvedTheme } = useContext(ThemeContext);

  const items = [
    {
      title: "2018 - 2020",
      cardTitle: "BTS SIO",
      cardSubtitle: "Notre Dame Du Roc, La Roche-sur-Yon, Pays de la Loire, France",
      cardDetailedText: "Computer engineering"
    },
    {
      title: "2020 - 2021",
      cardTitle: "RNCP II: Title CDA",
      cardSubtitle: "EPSI, Nantes, Pays de la Loire, France",
      cardDetailedText: "Computer engineering"
    },
    {
      title: "2021 - 2023",
      cardTitle: "Expert in IT and IS",
      cardSubtitle: "EPSI, Nantes, Pays de la Loire, France",
      cardDetailedText: "Computer engineering"
    }
  ];

  return (
    <Container id="education" className="py-5">
      <h2 className="text-center mb-5">Mon Parcours Scolaire</h2>
      <div className="timeline-container">
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-line"></div>
            <div className="timeline-item-dot"></div>
            <TimelineItem {...item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EducationTimeline;
