
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../App';

const TimelineItem = ({ title, cardTitle, cardSubtitle, cardDetailedText }) => {
  const { resolvedTheme } = useContext(ThemeContext);

  return (
    <Card
      className="timeline-item-card mb-3"
      bg={resolvedTheme === 'dark' ? 'dark' : 'light'}
      text={resolvedTheme === 'dark' ? 'white' : 'dark'}
    >
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{cardSubtitle}</Card.Subtitle>
        <Card.Text>{cardDetailedText}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {title}
      </Card.Footer>
    </Card>
  );
};

export default TimelineItem;
