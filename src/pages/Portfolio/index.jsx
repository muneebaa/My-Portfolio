import React from 'react';
import './style.css';
import ProgressBar from '../../global/components/ProgressBar';
import Project from '../../global/components/Project';
import { data } from '../../utils/data';

function Portfolio() {
  return (
    <div className='portfolio-main' id='portfolio'>
      <div className='portfolio-wrapper'>
        <div className='portfolio-sec-1'>
          <h2 className='portfolio-skills'>My Skills</h2>
          <h2 className='portfolio-skills-do'>You Can Imagine I Can Do</h2>
          <p className='portfolio-skills-detail'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            asperiores hic consequatur nihil dignissimos nostrum odio quidem
            maiores! Mollitia, debitis.
          </p>
        </div>

        <div className='portfolio-sec-2'>
          <div className='portfolio-exp'>
            <div className='portfolio-exp-skill-wrap'>
              <h2 className='portfolio-exp-title'>React Developement</h2>
              <h2 portfolio-exp-title>85%</h2>
            </div>

            <div className='bar'>
              <ProgressBar
                progressStyle={{ width: '100%' }}
                fillerStyle={{
                  width: '85%',
                  background: '#FFFFFF',
                }}
              />
            </div>
          </div>

          <div className='portfolio-exp'>
            <div className='portfolio-exp-skill-wrap'>
              <h2 className='portfolio-exp-title'>Css / Styling</h2>
              <h2 portfolio-exp-title>90%</h2>
            </div>
            <div className='bar'>
              <ProgressBar
                progressStyle={{ width: '100%' }}
                fillerStyle={{
                  width: '90%',
                  background: '#FFFFFF',
                }}
              />
            </div>
          </div>

          <div className='portfolio-exp'>
            <div className='portfolio-exp-skill-wrap'>
              <h2 className='portfolio-exp-title'>Backend Developement</h2>
              <h2 portfolio-exp-title>60%</h2>
            </div>
            <div className='bar'>
              <ProgressBar
                progressStyle={{ width: '100%' }}
                fillerStyle={{
                  width: '60%',
                  background: '#FFFFFF',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-sec-3'>
        {data.map((data) => (
          <Project name={data.name} img={data.img} id={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
