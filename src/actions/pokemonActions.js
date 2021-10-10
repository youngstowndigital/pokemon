import axios from 'axios';
import Endpoints from '../endpoints';
import { LOAD_POKEMON, SELECT_POKEMON, DESELECT_POKEMON } from './actionTypes';

const endpoints = new Endpoints();

export const loadPokemon = () => async (dispatch) => {
    try {
        const response = await axios.get(endpoints.getPokemon());

        const { data: { results, next, prev } } = response;

        dispatch({ payload: { pokemon: results, next, prev }, type: LOAD_POKEMON })
    } catch (error) {
        console.error(error.message);
    }
}

export const selectPokemon = (url) => async (dispatch) => {
    try {
        const response = await axios.get(url);

        const { data } = response;

        dispatch({ payload: data, type: SELECT_POKEMON });
    } catch (error) {
        console.error(error.message);
    }
}

export const deselectPokemon = () => {
    return { payload: null, type: DESELECT_POKEMON };
}
