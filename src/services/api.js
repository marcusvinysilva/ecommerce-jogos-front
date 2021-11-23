import axios from 'axios';
import { JwtHandler } from '../context/Auth/jwthandler';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  LoginUser: () => api.baseUrl + 'auth/signin',

  authHeader: () => ({
    Authorization: 'Bearer ' + JwtHandler.getJwt(),
  }),

  Apipostreq: (url, body, auth) =>
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        ...(auth ? api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),
});
export default api;
