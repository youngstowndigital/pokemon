import { LOAD_POKEMON } from '../actions/actionTypes';

const initialState = { prev: null, next: null, pokemon: [] };

const pokemonReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case LOAD_POKEMON:
            return { pokemon: payload.pokemon, prev: payload.prev, next: payload.next };
        default:
            return state;
    }
}

export default pokemonReducer;
