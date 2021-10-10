class Endpoints {
    constructor() {
        this.base_url = 'https://pokeapi.co/api/v2/';
    }

    getPokemon() {
        return `${this.base_url}pokemon`;
    }
}

export default Endpoints;
