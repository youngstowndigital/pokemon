import { DESELECT_POKEMON, LOAD_POKEMON, SELECT_POKEMON } from '../actions/actionTypes';

const initialState = { 
    prev: null, 
    next: null, 
    pokemon: [],
    selectedPokemon: null
};

const pokemonReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case LOAD_POKEMON:
            return { ...state, pokemon: payload.pokemon, prev: payload.previous, next: payload.next };
        case SELECT_POKEMON:
            return { ...state, selectedPokemon: payload }
        case DESELECT_POKEMON:
            return { ...state, selectedPokemon: null }
        default:
            return state;
    }
}

export default pokemonReducer;
