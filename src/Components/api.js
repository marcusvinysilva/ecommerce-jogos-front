import axios from 'axios';


const api = axios.create({
  baseUrl: "https://ultimate-api-backend.herokuapp.com",

});

export default api;