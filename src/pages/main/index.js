import React, { Component } from 'react';
import api from '../../services/data/api';

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
            <div planet-list>
                <ul>
                    <li><span>Name: </span>{this.state.planet.name}</li>
                    <li><span>Population: </span>{this.state.planet.population}</li>
                    <li><span>Climate: </span>{this.state.planet.climate}</li>
                    <li><span>Terrain: </span>{this.state.planet.terrain}</li>
                    <li><span>Featured in Filmes: </span>{this.state.planet.films.length}</li>
                </ul>
                <input className="next-btn" type="button" value="NEXT" onClick={this.planetRandom}/>
            </div>
        );
    }
}