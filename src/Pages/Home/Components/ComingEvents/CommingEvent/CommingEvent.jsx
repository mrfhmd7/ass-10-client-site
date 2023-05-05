import React from 'react';
import { Card } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr';
import './CommingEvent.css';

function CommingEvent({ data }) {
  const { name, year, month, date, place, time } = data;
  return (
    <Card className="ComingEvent">
      <Card.Body>
        <Card.Title className="eventHeader">
          <span>{date}</span>
          <sup>
            <small>th</small>
          </sup>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <h5 className="month">
            {month}, {year}
          </h5>
        </Card.Subtitle>
        <p className="time">{time}</p>
        <Card.Text>{name}</Card.Text>
        <Card.Text className="location">
          <GrLocation color="#000" size="2rem" />

          {place}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CommingEvent;
