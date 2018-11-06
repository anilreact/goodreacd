import React from 'react';
import Spinner from 'react-spinkit';

export default ({ text = 'Loading...' }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spinner className="cube-grid loading-spinner"  noFadeIn />
        <h3 style={{ textAlign: 'center', margin: '0 0 0 20px' }}>{text}</h3>
    </div>
);
