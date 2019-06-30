import React, { Component } from 'react';
import Button from '../Button';

import './style.css';

export default class Intro extends Component {

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
                <div id="btn-start">
                    <div className="btn-start">
                        <Button title="START"/>
                    </div>
                </div>
            </div>
        );
    }
}