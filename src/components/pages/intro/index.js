import React, { Component } from 'react';
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

    loadText(){
        this.setState({ text: "Star Wars by .bit Challenge" });
    }

    loadIntro(){
        setTimeout( () =>{
            this.loadText();
        }, 3000) 
    }

    render(){
        return(
            <div>
                <audio id="som" src="https://raw.githubusercontent.com/glaucia86/sounds/master/starwars.mp3"></audio>

                <section className="intro intro_texto">
                    A Long Time Ago, in a galaxy far,<br/> far away ...    
                </section>

                <section className="paragrafos">
                    <div className="historia historia_texto">
                        <p className="text-center">Star Wars by .bit Challenge</p>
                        <p className="text-center">B2W</p>
                        <br/>
                        <p className="text-center">
                            Nesse desafio!<br/> 
                            A idéia é retornar um planeta aleatório da franquia
                            onde será mostrado como seria o clima, o terreno,
                            a população habitada, terrno e quantos filmes esse planeta foi exibido.
                            Aperte o play e divirta-se!!!
                        </p>
                    </div>
                </section>
                <Button />
            </div>
        );
    }
}