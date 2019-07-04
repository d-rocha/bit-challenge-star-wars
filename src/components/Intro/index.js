import React, { Component } from 'react';
import Button from '../Button';

import './style.css';

export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state = {
            intro: {
                img: '',
                msg: '',
                btn: ''
            }
        }
    }

    componentDidMount(){
        this.loadIntro();
        this.removeIntroText();
    }

    removeIntroText(){
        setTimeout( () => {
            var display = document.getElementById("intro").style.display;
            if(display === "none")
                document.getElementById("intro").style.display = 'block';
            else
                document.getElementById("intro").style.display = 'none';
        }, 3000)
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
        }, 4000) 
    }

    render(){

        return(
            <div className="container-intro">
                <div id="intro" className="intro-text">
                    <span>A Long Time Ago, in a galaxy far,<br/> far away ...</span>
                </div>

                <div>
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