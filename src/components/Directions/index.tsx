import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import api from '../../config/api';

interface DirectionsProps {
	destination: any;
	origin: any;
	onReady: any;
}

const Directions = ({ destination, origin, onReady }: DirectionsProps) => {
	const [GCP_API_KEY, SET_GCP_API_KEY] = useState('');
	const [IS_API_KEY_LOADED, SET_IS_API_KEY_LOADED] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const res = await api.get('/GCP_API');
				if (res.data.msg) {
					SET_GCP_API_KEY(res.data.msg);
					SET_IS_API_KEY_LOADED(true);
				}
			} catch (err) {
				SET_IS_API_KEY_LOADED(false);
			}
		})();
	}, []);

	return (
		<>
			{IS_API_KEY_LOADED && (
				<MapViewDirections
					destination={destination}
					origin={origin}
					onReady={onReady}
					apikey={GCP_API_KEY}
					strokeColor='#222'
					strokeWidth={3}
				/>
			)}
		</>
	);
};

export default Directions;
