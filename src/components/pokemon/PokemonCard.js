import React from 'react';
import Card from 'react-bootstrap/Card';

const PokemonCard = ({ pokemon: { name } }) => {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
            </Card.Body>
        </Card>
    )
};

export default PokemonCard;
