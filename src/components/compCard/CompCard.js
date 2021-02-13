import React from "react";
import "./ComCard.css";
import { Card } from "react-bootstrap";

const CompCard = (props) => {
  return (
    <Card className="movieCard">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link>{props.link}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CompCard;
