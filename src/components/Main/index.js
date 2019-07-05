import React, { Component } from 'react';
import api from '../../services/data/api';
// import Button from '../Button';
import Load from '../Load';
import Erro from '../Erro';

import './style.scss';

export default  class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            planet: {
                name: '',
                population: '',
                climate: '',
                terrain: '',
                films: []
            },
            arrow: '',
            load: false,
            error: false
        }
    }

    componentDidMount(){
        this.planetRandom();
    }

    async getPlanet(id){
       let response = await api.get(`/planets/${id}`)
       return response;
    }

    planetRandom = () => {
        const arrowIndicator = require('../../assets/images/sw-arrow-indicator.gif');
        this.setState({ load: true })
        let id = Math.floor(Math.random() * 61 + 1);
        this.getPlanet(id).then(planet => {
            this.setState({ 
                planet: planet.data,
                arrow:  <img src={arrowIndicator} alt="arrow indicator"/>,
                load: false,
                error: false
            })
        }).catch( error => {
            this.setState({ load: false, error: true });
        });
    };

    render(){
        if( this.state.load ){
           return <Load/>
        }
        if( this.state.error ){
            return <Erro/>
        }
        return(
            <div>
                <h1 className="title">The Planets</h1>
                <div className="container">
                    <div className="card-wrap">
                        <div className="card card-bg">
                            <div className="card-info">
                                <h1><span>Planet</span><br/>{this.state.planet.name}</h1>
                                <span className="arrow-indicator">{this.state.arrow}</span>
                                <p><span>Population: </span>{this.state.planet.population}</p>
                                <p><span>Climate: </span>{this.state.planet.climate}</p>
                                <p><span>Terrain: </span>{this.state.planet.terrain}</p>
                                <p><span>Featured in Films: </span>{this.state.planet.films.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="btn-next">
                    <div className="btn-next">
                        <button type="button" className="nes-btn is-warning" onClick={this.planetRandom}>NEXT</button>
                    </div>
                </div>
            </div>
        );
    }
}