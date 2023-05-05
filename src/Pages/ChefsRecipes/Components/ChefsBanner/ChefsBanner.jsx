import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';
import LazyLoad from 'react-lazyload';
import ReactToPdf from "react-to-pdf";
import './ChefsBanner.css';

export default function ChefsBanner({ chefID }) {
  const [chefsData, setChefsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef();

  useEffect(() => {
    axios
      .get(`https://server-side-mrfhmd7-gmailcom.vercel.app/detailChefsData/${chefID}`)
      .then((result) => {
        setIsLoading(false);
        setChefsData(result.data);
      });
  }, [chefID]);


  return isLoading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <div ref={containerRef} className="chefsBanner">
      <div>
        <LazyLoad height="100%">
          <img src={chefsData.picture_url} alt="" />
        </LazyLoad>
      </div>
      <div>
        <Card bg="dark" text="light" style={{ width: '100%', height: '100%' }}>
          <Card.Body className="chefsText">
            <Card.Title className="chefsName">{chefsData.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <AiFillLike className="ChefsLike" /> {chefsData.likes}
            </Card.Subtitle>
            <Card.Text>{chefsData.bio}</Card.Text>
            <Card.Text className="text-muted">
              Experience: {chefsData.years_of_experience} Years
            </Card.Text>
            <Card.Text className="text-muted">
              Recipes: {chefsData.number_of_recipes} Item
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <ReactToPdf targetRef={containerRef} filename="div-blue.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Generate pdf</Button>}
        </ReactToPdf>
      </div>
    </div>
  );
}
