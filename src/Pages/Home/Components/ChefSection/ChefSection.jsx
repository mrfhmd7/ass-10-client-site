import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './ChefSection.css';

export default function ChefSection() {
  const [chefsData, setChefsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://server-side-mrfhmd7-gmailcom.vercel.app/chefsData').then((result) => {
      setIsLoading(false);
      setChefsData(result.data);
    });
  }, []);
  return isLoading ? (
    <Spinner animation="border" variant="success" />
  ) : (
    <section className="chefsSection">
      <h3>Chefs Section</h3>
      <Row sm={2} xs={1} md={3} lg={3} xxl={3} className="g-4">
        {chefsData.map((chefData) => (
          <Col key={chefData.id}>
            <Card bg="dark" text="light" className="cards">
              <Card.Img width="100%" variant="top" src={chefData.picture_url} />
              <Card.Body>
                <Card.Title>{chefData.name}</Card.Title>
                <Card.Text>Experience: {chefData.years_of_experience} Years</Card.Text>
                <Card.Text>Recipes: {chefData.number_of_recipes} Item</Card.Text>
                <Card.Text>
                  <AiFillLike className="ChefsLike" /> {chefData.number_of_recipes}
                </Card.Text>
              </Card.Body>
              <Button className="navButton" variant="outline-secondary" size="lg">
                <NavLink className="navLink" to={`/chefsRecipes/${chefData.id}`}>
                  View recipes
                </NavLink>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
