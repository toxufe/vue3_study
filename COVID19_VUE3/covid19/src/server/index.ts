import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 3000,
});

export const getApiList = () => server.get('/list').then(res => res.data)