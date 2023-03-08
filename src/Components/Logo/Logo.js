import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.jpg';

const Logo = () => {
        return (
            <Tilt>
            <div style={{ width: '300px', backgroundColor: 'darkgreen' }}>
            <p><img alt='brain' src={brain} /></p>
            </div>
          </Tilt>
    );
}

export default Logo