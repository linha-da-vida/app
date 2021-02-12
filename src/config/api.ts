import axios from 'axios';

const client = axios.create({
	baseURL: process.env.REACT_NATIVE_SERVER_URI,
});

export default client;
