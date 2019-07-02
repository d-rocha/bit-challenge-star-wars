import React from 'react';
import { Link } from 'react-router-dom';

const swError = require('../../assets/images/sw-error.gif');

const Error = () => (

    <div className="error">
        <img  src={swError} alt="error"/>
        <h4 className="error-msg ">An Error has occured ... :(<i className="nes-octocat animate" width="1px"></i></h4>
        <p className="retry">RETRY</p>
        <Link className="nes-btn is-error" to="/main">RETRY</Link>
    </div>
);

export default Error;