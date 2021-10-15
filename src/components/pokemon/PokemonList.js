import Button from 'react-bootstrap/Button';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { loadPokemon } from '../../actions/pokemonActions';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemon, nextUrl, prevUrl, loadPokemon }) => {
    return (
        <Fragment>
            {
                pokemon.map(
                    (pokemon, i) => <PokemonCard key={i} pokemon={pokemon} />)
            }
            <div className="m-3">
                {
                    prevUrl && (
                        <Button onClick={() => loadPokemon(prevUrl)}>
                            Prev
                        </Button>
                    )
                }
                {' '}
                {
                    nextUrl && (
                        <Button onClick={() => loadPokemon(nextUrl)}>
                            Next
                        </Button>
                    )
                }
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon,
    nextUrl: state.pokemon.next,
    prevUrl: state.pokemon.prev
});

export default connect(mapStateToProps, { loadPokemon })(PokemonList);
