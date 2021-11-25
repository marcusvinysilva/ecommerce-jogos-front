import axios from 'axios';

export const loginApi = {
  baseUrl: process.env.REACT_APP_API_URL,

  loginUrl: () => loginApi.baseUrl + '/auth/signin',

  authHeader: () => ({
    Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
    'Content-Type': 'application/json',
  }),

  apiGetReqquest: (url, auth) =>
    fetch(url, {
      method: 'GET',
      headers: auth ? new Headers(loginApi.authHeader()) : undefined,
    }),

  apiPostRequest: (url, body) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
        'Content-Type': 'application/json',
      },
      data: body,
    };
    return axios(config);
  },
};
