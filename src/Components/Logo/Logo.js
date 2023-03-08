import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
        return (
            <Tilt>
            <div class name='br2 shadow-2' style={{ width: '150px'}}>
            <p className='pa3'><img style={{paddingTop: '5px'}}alt='brain' src={brain}/></p>
            </div>
          </Tilt>
    );
}

export default Logo