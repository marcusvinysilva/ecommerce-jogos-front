import axios from 'axios';

export const api = axios.create({
    baseURL: "https://ultimate-api-backend.herokuapp.com",
})