import React from 'react';
import Button from '../../global/components/Button';
import { colors } from '../../global/constants/colors';
import './style.css';

function About() {
  return (
    <div className='about' id='about'>
      <div className='about-wrapper'>
        <div className='about-sec-1'>
          <div className='about-sec-1-square-border'></div>
          <div className='about-sec-1-square-image'></div>
          <div className='about-sec-1-square-fill'></div>
        </div>
        <div className='about-sec-2'>
          <h2 className='about-sec-2-about'>About Me</h2>
          <h2 className='about-sec-2-name'>
            I'm <span>Muneeba</span>
          </h2>
          <h2 className='about-sec-2-dev'>
            Web <span>Developer</span>
          </h2>
          <h3 className='about-sec-2-address'>Based in Lahore,PK</h3>
          <p className='about-sec-2-p1'>
            Hi! My name is Muneeba Dilawaze. I am Frontend Developer, and I'm
            very passionate and dedicated to my work.
          </p>
          <p className='about-sec-2-p2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            id culpa tempore unde rerum eaque! Facere animi aperiam totam qui?
          </p>
          <Button
            value='Download CV'
            textColor='white'
            backgroundColor={colors.main}
            marginTop='1.5em'
          />
        </div>
        <div className='about-sec-3'>
          <div className='about-sec-3-box-fill'></div>
          <div className='about-sec-3-box-border'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
