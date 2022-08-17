import React from 'react';

import Button from '../../global/components/Button';

import { colors } from '../../global/constants/colors';
import './style.css';

function Home() {
  return (
    <div className='home' id=''>
      <div>
        <h2>Hello, I`m</h2>
        <h1>Muneeba </h1>
        <h2>
          Creative<span>Developer</span>
        </h2>
        <div>
          <Button
            value='Say Hello ✉'
            textColor={colors.white}
            backgroundColor={colors.main}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
