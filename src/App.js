import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPokemon, selectPokemon } from './actions/pokemonActions';
import PokemonList from './components/pokemon/PokemonList';
import PokemonInfo from './components/pokemon/PokemonInfo';

const App = ({ pokemon, selectedPokemon, loadPokemon }) => {
    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <div>
            <h1 className="m-2">Pokemon App</h1>
            {
                selectedPokemon ?
                <PokemonInfo selectedPokemon={selectedPokemon} />
                :
                <PokemonList pokemon={pokemon} />
            }
        </div>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon,
    selectedPokemon: state.pokemon.selectedPokemon
});

export default connect(mapStateToProps, { loadPokemon })(App);
