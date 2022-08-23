import React from 'react';

import Button from '../../global/components/Button';

import { colors } from '../../global/constants/colors';
import img from '../../assets/illus.png';
// import img from '../../assets/image2-lanczos3.png';

import './style.css';

function Home() {
  return (
    <div className='home-main' id=''>
      <div className='home-sec-1'>
        <h2 className='home-sec-1-hello'>Hello, I'm</h2>
        <h1 className='home-sec-1-name'>Muneeba </h1>
        <h2 className='home-sec-1-creative'>
          Creative<span>Developer</span>
        </h2>
        <div className='home-sec-1-buttons'>
          <Button
            value='Say Hello ✉'
            textColor={colors.white}
            backgroundColor={colors.main}
          />
          <p>About Me</p>
        </div>
      </div>
      <div className='home-sec-2'>
        <div className='home-square-img'>
          <img src={img} alt='' />
        </div>
        <div className='home-square-small'></div>
        <div className='home-square-border'></div>

        <div className='home-square-big'></div>
      </div>
    </div>
  );
}

export default Home;
