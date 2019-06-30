import React, { Component } from 'react';
import Button from '../Button';

import './style.css';

export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount(){
        // this.loadIntro();
    }

    tocaSom(){
        
    }

    loadIntro(){
        setTimeout( () =>{
            const sound = document.getElementById("sound");
            sound.play();
        }, 3000) 
    }

    render(){
        const bannerStart = require('../../assets/images/sw-banner.png');
        return(
            <div className="container">
                <audio id="sound" src="https://raw.githubusercontent.com/glaucia86/sounds/master/starwars.mp3"></audio>
                <img src={bannerStart} alt="banner start"/>
                <div className="btn">
                    <a href>
                        <span className="btn-txt">Play Now</span>
                        <div className="chevron-wrapper">
                            <div className="chevron small left"></div>
                            <div className="chevron small right"></div>
                            <div className="chevron fat left"></div>
                            <div className="chevron fat right"></div>
                        </div>
                        <div className="line-wrapper">
                            <div className="line top"></div>
                            <div className="line bottom"></div>
                        </div>
                    </a>
                </div>
                <div id="btn-start">
                    <div className="btn-start">
                        <Button />
                    </div>
                </div>
            </div>
        );
    }
}