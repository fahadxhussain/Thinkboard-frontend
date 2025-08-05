import axios from 'axios';

// Use your deployed backend URL
const BASE_URL = import.meta.env.MODE === 'development' 
    ? 'http://localhost:5001/api' 
    : 'https://your-backend-app.vercel.app/api';

const api = axios.create({
    baseURL: BASE_URL
})

export default api;