import axios from 'axios';

const token = process.env.FILLOUT_KEY;

if (!token) {
    console.log("FILLOUT_KEY is missing from env");
    process.exit(1);
}

const client = axios.create({
    baseURL: "https://api.fillout.com/v1/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

client.interceptors.request.use((config) => {
    if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
},(error) => {
    return Promise.reject(error);
});

export default client;