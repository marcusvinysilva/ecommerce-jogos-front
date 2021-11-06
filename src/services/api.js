import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
    params: { category: 'shooter', platform: 'pc' },
})
export default api
