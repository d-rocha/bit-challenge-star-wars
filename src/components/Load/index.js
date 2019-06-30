import React from 'react';

const swLoad = require('../../assets/images/sw-loader.gif');

const Load = () => (

    <div id="loading">
        <img  src={swLoad} alt="loading"/>
        <h4 className="loading-blink">Loading...</h4>
    </div>
);

export default Load;