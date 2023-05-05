import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import './Banner.css';

export default function Banner() {
  const [index, setIndex] = useState(0);

  const [bannersData, setBannersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://server-side-mrfhmd7-gmailcom.vercel.app/mainBanner').then((result) => {
      setBannersData(result.data);
      setIsLoading(false);
    });
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return isLoading ? (
    <Spinner animation="border" variant="danger" />
  ) : (
    <section>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bannersData.map((bannerData) => (
          <Carousel.Item key={bannerData.id}>
            <img className="d-block w-100" src={bannerData.img} alt="First slide" />
            <Carousel.Caption className="carousel-text">
              <h3>{bannerData.header}</h3>
              <p>{bannerData.paragraph}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
