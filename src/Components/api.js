import { JwtHandler } from "./Auth/jwthandler";

const api = {
  baseUrl: "https://ultimate-api-backend.herokuapp.com/",

  AuthUser: () => api.baseUrl + "auth/signin",

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
   

    Apigetreq: (url, auth) =>
    fetch(url, {
        method: "GET",
        headers: auth ? new Headers(api.authHeader()) : undefined,
    }),


};

export default api;
