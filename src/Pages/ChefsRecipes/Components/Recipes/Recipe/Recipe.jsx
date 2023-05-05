import { useState } from 'react';
import { Button, Card, Toast } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import './Recipe.css';

export default function Recipe({ recipe }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card bg="dark" style={{ width: '100%', margin: '5rem 0' }}>
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <AiFillStar />
            {recipe.rating}/5
          </Card.Subtitle>
          <div className="section">
            <h4>Ingredients</h4>
            {recipe.ingredients?.map((ing) => (
              <Card.Text key={ing}>{ing}</Card.Text>
            ))}
          </div>
          <div className="section">
            <h4>Instructions</h4>
            {recipe.instructions?.map((ing) => (
              <Card.Text key={ing}>{ing}</Card.Text>
            ))}
          </div>
        </Card.Body>
        <Button variant="outline-warning" onClick={() => setShow(true)}>
          Add to Favorite
        </Button>
      </Card>
      <Toast bg="dark" onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">The recipe is your favorite</strong>
        </Toast.Header>
        <Toast.Body>{recipe.name}</Toast.Body>
      </Toast>
    </>
  );
}
