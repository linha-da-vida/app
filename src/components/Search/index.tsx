import React, { useEffect, useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import api from '../../config/api';
import { v4 as uuidv4 } from 'uuid';

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
						sessiontoken: uuidv4(),
					}}
					fetchDetails
					enablePoweredByContainer={false}
					styles={{
						container: {
							position: 'absolute',
							marginTop: 40,
							width: '100%',
						},
						textInputContainer: {
							flex: 1,
							backgroundColor: 'transparent',
							height: 54,
							marginHorizontal: 20,
							borderTopWidth: 0,
							borderBottomWidth: 0,
						},
						textInput: {
							height: 54,
							margin: 0,
							borderRadius: 0,
							paddingTop: 0,
							paddingBottom: 0,
							paddingLeft: 20,
							paddingRight: 20,
							marginTop: 0,
							marginLeft: 0,
							marginRight: 0,
							elevation: 5,
							shadowColor: '#000',
							shadowOpacity: 0.1,
							shadowOffset: { width: 0, height: 0 },
							shadowRadius: 15,
							borderWidth: 1,
							borderColor: '#DDD',
							fontSize: 18,
						},
						listView: {
							borderWidth: 1,
							borderColor: '#DDD',
							backgroundColor: '#FFF',
							marginHorizontal: 20,
							elevation: 5,
							shadowColor: '#000',
							shadowOpacity: 0.1,
							shadowOffset: { width: 0, height: 0 },
							shadowRadius: 15,
							marginTop: 10,
						},
						description: {
							fontSize: 16,
						},
						row: {
							padding: 20,
							height: 58,
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
