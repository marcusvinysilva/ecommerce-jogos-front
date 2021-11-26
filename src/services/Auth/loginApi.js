import axios from 'axios';

export const loginApi = {
  baseUrl: process.env.REACT_APP_API_URL,

  loginUrl: () => loginApi.baseUrl + '/auth/signin',

  Userinfo: ()=> loginApi.baseUrl + '/auth/me',

  authHeader: () => ({
    Authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
    'Content-Type': 'application/json',
  }),

  apiGetRequest: (url, auth) =>{
    const config = {
      method: 'GET',
      url: url,
      headers: auth ? new Headers(loginApi.authHeader()) : undefined,
    }
    return axios(config);
    },

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
