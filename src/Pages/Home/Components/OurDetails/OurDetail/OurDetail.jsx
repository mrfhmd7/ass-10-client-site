import React from 'react';
import CountUp from 'react-countup';
import './OurDetail.css';

function OurDetail({ data }) {
  const { heading, num, extra } = data;
  return (
    <div className="ourDetail">
      <div>
        <h2 className="h-font">{heading}</h2>
        <CountUp className="num" end={num} />
        <p>
          <small>{extra}</small>
        </p>
      </div>
    </div>
  );
}

export default OurDetail;
