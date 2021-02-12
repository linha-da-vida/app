import axios from 'axios';

const client = axios.create({
	baseURL: 'http://192.168.15.9:3000',
});

export default client;
