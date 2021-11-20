// import axios from 'axios';

// const api = axios.create({
//   baseUrl: "https://ultimate-api-backend.herokuapp.com",

// });

// export default api;
import { JwtHandler } from "./Auth/jwthandler";

const api = {
  baseUrl: "https://ultimate-api-backend.herokuapp.com/",

  LoginUser: () => api.baseUrl + "auth/signin",

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  Apipostreq: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),
};

export default api;
