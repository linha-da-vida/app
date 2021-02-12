import axios from 'axios';
import { SERVER_URI } from '@env';

const client = axios.create({
	baseURL: SERVER_URI,
});

export default client;
