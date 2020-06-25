import React from 'react';
import axios from 'axios';

const BASE_API = 'https://pokeapi.co/api/v2';

export default {
  getPoketmon: (params) => axios.get(`${BASE_API}/pokemon`, {params}),
};
