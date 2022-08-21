import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Project({ name, id, img }) {
  return (
    <div className='project-main'>
      {/* <Link to='/'> */}
      <div class='portfolio__item'>
        <img
          src={require(`../../../assets/${img}`)}
          alt='name'
          class='portfolio__img'
        />
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Project;
