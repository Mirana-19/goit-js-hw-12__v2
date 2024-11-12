import axios from 'axios';

const API_KEY = '27366068-7f092b690db13a9a2c4fde80b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getData = async (query, page) => {
  const result = await axios.get(`?key=${API_KEY}&q=${query}`);

  return result;
};
