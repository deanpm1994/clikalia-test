import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/'

const get = async (url, params = null, userConfig = null) =>
  await axios.get(`${baseUrl}${url}`, {
    params,
    ...userConfig,
  });

const exportDefault = {
  get,
}

export default exportDefault
