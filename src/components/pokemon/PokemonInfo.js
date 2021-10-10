import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deselectPokemon } from '../../actions/pokemonActions';

const PokemonInfo = ({ selectedPokemon, deselectPokemon }) => {
    return (
        <div className="m-3">
            <h2>{ selectedPokemon.name }</h2>
            <Button onClick={() => deselectPokemon()}>Back</Button>
        </div>
    );
};

export default connect(null, { deselectPokemon })(PokemonInfo);
