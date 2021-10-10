import axios from 'axios';
import Endpoints from '../endpoints';
import { LOAD_POKEMON } from './actionTypes';

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
