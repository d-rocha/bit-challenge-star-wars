import React, { Component } from 'react';
import api from '../../services/data/api';

import './style.css';

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
            }
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
        let id = Math.floor(Math.random() * 61 + 1);
        this.getPlanet(id).then(planet => {
            this.setState({ planet: planet.data })
        })
    };

    render(){
        return(
            <div>
                <h1 className="title">The Planets</h1>
                <div className="container">
                    <div className="card-wrap">
                        <div className="card card-bg">
                            <div className="card-info">
                                <h1><span>Planet</span><br/>{this.state.planet.name}</h1>
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
                        <button className="btn-model" onClick={this.planetRandom}>NEXT</button>
                    </div>
                </div>
            </div>
        );
    }
}