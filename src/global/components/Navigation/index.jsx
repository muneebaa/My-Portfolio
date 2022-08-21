import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <>
      <div
        className='navigation-main'
        style={{ backgroundColor: navbar ? '#3C3C3C' : '' }}>
        <div className='navigation-logo'>Muneeba</div>
        <div className='navigation-link'>
          <Link to='#' smooth>
            Home
          </Link>
          <Link to='#about' smooth>
            About
          </Link>
          <Link to='#contact' smooth>
            Contact
          </Link>
          <Link to='#portfolio' smooth>
            Portfolio
          </Link>
          <Link to='#resume' smooth>
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
