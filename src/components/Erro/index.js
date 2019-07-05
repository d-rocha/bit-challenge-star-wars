import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const swError = require('../../assets/images/sw-error.gif');

const Erro = () => (

    <div className="error">
        <img  src={swError} alt="error"/>
        <h4 className="error-msg ">An Error has occured ... :(</h4>
        <p className="retry">try again</p>
        <div className="retry-btn">
            <Link className="nes-btn is-error" to="/">RESTART</Link>
        </div>
    </div>
);

export default Erro;