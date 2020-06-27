import axios from 'axios';

const JSON_API = 'https://raw.githubusercontent.com/intelcoder/PokemonGO-Pokedex-Korean/master/pokedex-korean.json';

export default {
  getPoketmons : () => axios.get(JSON_API),
};
