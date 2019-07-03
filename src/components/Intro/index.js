import React, { Component } from 'react';
import Button from '../Button';

import './style.css';

export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state = {
            audio: '',
            intro: {
                img: '',
                msg: '',
                btn: ''
            }
        }
    }

    componentDidMount(){
        this.introSound();
        this.loadIntro();
    }

    introSound(){
        const sound = document.getElementById("sound");
        setTimeout( () => {
            this.setState( { audio: 'https://raw.githubusercontent.com/glaucia86/sounds/master/starwars.mp3'});
            sound.play();
        }, 1000)
    }

    loadIntro(){
        const bannerStart = require('../../assets/images/sw-banner.png');
        setTimeout( () =>{
            this.setState({ 
                intro: {
                    img: <img src={bannerStart} alt="banner start"/>,
                    msg: 'Press Start',
                    btn: <Button/>
                }
             })
        }, 1000) 
    }

    render(){
        return(
            <div className="container-intro">
                <div className="intro container-first">
                    <span>A Long Time Ago, in a galaxy far,<br/> far away ...</span>
                </div>

                <div className="container-second">
                    <audio id="sound" src={this.state.audio}></audio>
                    
                    <div className="img-banner">
                        {this.state.intro.img}
                    </div>
                    
                    <div className="msg-press-start">
                        <span className="nes-text is-warning">{this.state.intro.msg}</span>
                    </div>

                    <div className="btn-start">
                        {this.state.intro.btn}
                    </div>
                </div>
            </div>
        );
    }
}