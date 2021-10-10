import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Endpoints from './endpoints';

const endpoints = new Endpoints();

const App = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            let pokemon = await axios.get(endpoints.getPokemon());
            setPokemon(pokemon);
        }

        fetchPokemon();
    }, []);

    return (
        <div>
            <h1>Pokemon App</h1>
            { JSON.stringify(pokemon) }
        </div>
    );
};

export default App;
