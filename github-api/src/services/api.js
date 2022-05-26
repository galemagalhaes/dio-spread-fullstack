import axios from 'axios'

// instancia do axios - baseURL é de onde vem os dados a serem consumidos, githubapi
const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;