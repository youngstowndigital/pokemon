import React, { Fragment } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemon }) => {
    return (
        <Fragment>
            {
                pokemon.map(
                    (pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)
            }
        </Fragment>
    );
};

export default PokemonList;
