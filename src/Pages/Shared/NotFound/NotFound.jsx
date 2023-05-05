import React from 'react';
import { Button } from 'react-bootstrap';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="text-center">
        <h1 className="dance-font text-white">OMG! ERROR 404</h1>
        <h3 className="dance-font text-white text">The requested page cannot be found!</h3>
        <Button variant="outline-primary">
          <Link className="text-white text-decoration-none" to="/home">
            <AiFillCaretRight />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
