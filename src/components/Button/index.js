import React from 'react'
import { Link } from 'react-router-dom';

import './style.css';

const Button = () => (<Link className='nes-btn is-warning' to='/main'>START</Link>);

export default Button;

// import style from "styled-components";

// const Button = style.a`
//     margin-top: 20px;
//     font-size: 2em;
//     top: -4px;
//     right: -4px;
//     bottom: -4px;
//     left: -4px;
//     content: "";
//     box-shadow: inset -4px -4px #e59400;
//     background-color: #e59400;
// `
// export default Button;