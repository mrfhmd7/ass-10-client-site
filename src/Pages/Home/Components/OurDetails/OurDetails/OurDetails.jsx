import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import OurDetail from '../OurDetail/OurDetail';
import './OurDetails.css';

function OurDetails() {
  const [ourDetails, setOurDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://server-side-mrfhmd7-gmailcom.vercel.app/details').then((result) => {
      setOurDetails(result.data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Spinner animation="border" variant="success" />
  ) : (
    <section id="details" className="ourDetails">
      {ourDetails.map((data) => (
        <OurDetail key={data.id} data={data} />
      ))}
    </section>
  );
}

export default OurDetails;
