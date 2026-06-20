import axios from 'axios';

if (!import.meta.env.VITE_BACKEND_URL) {
    throw new Error('VITE_BACKEND_URL is not defined');
}

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
    withCredentials: true,
});

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = '/auth/signIn';
        }

        return Promise.reject(error);
    }
);

export default api;