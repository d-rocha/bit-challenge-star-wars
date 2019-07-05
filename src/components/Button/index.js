import React from 'react'
import { Link } from 'react-router-dom';

import './style.scss';

const Button = () => (<Link className='nes-btn is-warning' to='/main'>START</Link>);

export default Button;