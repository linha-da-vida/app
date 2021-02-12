import MapView from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Permission from 'expo-permissions';

import Search from '../Search';

export default function Map() {
	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setRegion({
					latitude,
					longitude,
					latitudeDelta: 0.0143,
					longitudeDelta: 0.0134,
				});
			}, // on success
			() => {}, // on failure
			{ timeout: 2000, enableHighAccuracy: true, maximumAge: 1000 }
		);
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<MapView
				onMapReady={async () => {
					const { status } = await Permission.askAsync(Permission.LOCATION);
				}}
				style={styles.mapStyle}
				region={region}
				showsUserLocation
				loadingEnabled
			/>

			<Search />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
