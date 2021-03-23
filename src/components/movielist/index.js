import React from 'react';
import {
  Button, Row, Card,
} from 'react-bootstrap';

const Movielist = ({ data }) => (
  <Row>
    {data.map((element) => (
      <Card style={{ width: '18rem', margin: '1em' }}>
        <Card.Img variant="top" src={element.poster_url} />
        <Card.Body>
          <Card.Title>{element.name}</Card.Title>
          <Card.Text>
            {element.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ))}
  </Row>
);

export default Movielist;
