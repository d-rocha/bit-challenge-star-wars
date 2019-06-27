import React, { Component } from 'react';
import Banner from '../../Banner';
import Button from '../../Button';

import './style.css';

export default class Intro extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount(){
        this.loadIntro();
    }

    tocaSom(){
        const som = document.getElementById("som");
        som.play();
    }

    loadIntro(){
        setTimeout( () =>{
            this.tocaSom();
        }, 3000) 
    }

    render(){
        return(
            <div>
                <audio id="som" src="https://raw.githubusercontent.com/glaucia86/sounds/master/starwars.mp3"></audio>

                <Banner/>
                
                <div className="btn">
                    <a>
                        <span className="btn-txt">Play Now</span>
                        <div className="chevron-wrapper">
                            <div className="chevron small left">
                        </div>
                        <div className="chevron small right"></div>
                        <div className="chevron fat left"></div>
                        <div className="chevron fat right"></div>
                        </div>
                        <div className="line-wrapper">
                            <div className="line top">
                        </div>
                        <div className="line bottom"></div></div>
                    </a>
                </div>
                <Button />
            </div>
        );
    }
}