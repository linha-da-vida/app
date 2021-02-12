import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import api from '../../config/api';

const GooglePlacesInput = () => {
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
			{IS_API_KEY_LOADED ? (
				<GooglePlacesAutocomplete
					placeholder='Para onde?'
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
					}}
					query={{
						key: GCP_API_KEY,
						language: 'pt',
					}}
					fetchDetails
					enablePoweredByContainer={false}
					styles={{
						container: {
							position: 'absolute',
							backgroundColor: 'white',
							marginTop: Constants.statusBarHeight,
							width: '100%',
						},
					}}
				/>
			) : (
				// Add a spinner here
				<View style={{ position: 'absolute' }}>
					<Text style={{ fontSize: 50 }}>Loading...</Text>
				</View>
			)}
		</>
	);
};

export default GooglePlacesInput;
