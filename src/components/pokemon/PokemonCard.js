import React from 'react';

const PokemonCard = ({ pokemon: { name } }) => {
    return (
        <div>
            <h1>{ name }</h1>
        </div>
    )
};

export default PokemonCard;
