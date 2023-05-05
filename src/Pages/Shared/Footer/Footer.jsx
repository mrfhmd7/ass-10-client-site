import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="FootermegaLink">
        <div>
          <ul>
            <li>
              <a href="#abc">FoodBuzz Business</a>
            </li>
            <li>
              <a href="#abc">Teach on FoodBuzz</a>
            </li>
            <li>
              <a href="#abc">Get the app</a>
            </li>
            <li>
              <a href="#abc">About us</a>
            </li>
            <li>
              <a href="#abc">Contact us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#abc">Careers</a>
            </li>
            <li>
              <a href="#abc">Blog</a>
            </li>
            <li>
              <a href="#abc">Help and Supports</a>
            </li>
            <li>
              <a href="#abc">Affiliate</a>
            </li>
            <li>
              <a href="#abc">Investors</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#abc">Terms</a>
            </li>
            <li>
              <a href="#abc">Privacy policy</a>
            </li>
            <li>
              <a href="#abc">Cookie setting</a>
            </li>
            <li>
              <a href="#abc">Site map</a>
            </li>
            <li>
              <a href="#abc">Accessibility Statement</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-last-part">
        <div id="footer-title">
          <NavLink className="nav-title" to="index.html">
            <h1 id="footer-title-text">OODBUZZ</h1>
          </NavLink>
        </div>
        <p>
          <small> © 2022 FoodBuzz-Maruf, Inc.</small>
        </p>
      </div>
    </div>
  );
}

export default Footer;
