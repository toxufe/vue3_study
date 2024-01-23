import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:5173/api',
    timeout: 3000,
});

export const getApiList = () => server.get('/list').then(res => res.data)