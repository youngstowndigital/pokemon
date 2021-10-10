import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from './actions/pokemonActions';
import PokemonCard from './components/pokemon/PokemonCard';

const App = ({ pokemon, loadPokemon }) => {
    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <div>
            <h1>Pokemon App</h1>
            {
                pokemon.map(
                    (pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)
            }
        </div>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon
});

export default connect(mapStateToProps, { loadPokemon })(App);
