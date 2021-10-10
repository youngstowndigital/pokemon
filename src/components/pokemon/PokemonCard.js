import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { selectPokemon } from '../../actions/pokemonActions';
import Button from 'react-bootstrap/Button';

const PokemonCard = ({ pokemon: { name, url }, selectPokemon }) => {
    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Button onClick={() => selectPokemon(url)}>
                    View
                </Button>
            </Card.Body>
        </Card>
    )
};

export default connect(null, { selectPokemon })(PokemonCard);
