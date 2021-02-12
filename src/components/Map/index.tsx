import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Permission from 'expo-permissions';

import Search from '../Search';
import Directions from '../Directions';
import routes from '../../routes';

export default function Map() {
	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0,
	});

	const [destination, setDestination] = useState({});
	const [destinationLoaded, setDestinationLoaded] = useState(false);

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

	const handleLocationSelected = (details: any, { geometry }: any) => {
		const {
			location: { lat: latitude, lng: longitude },
		} = geometry;

		if (details) {
			setDestination({
				latitude,
				longitude,
				title: details.structured_formatting.main_text,
			});

			setDestinationLoaded(true);
		}

		console.log(details, geometry);
	};

	let mapView = useRef(null) as any;

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
				ref={(el) => {
					mapView = el;
				}}
			>
				{destinationLoaded && (
					<Directions
						origin={region}
						destination={destination}
						onReady={(result: any) => {
							mapView.fitToCoordinates(result.coordinates);
						}}
					/>
				)}
			</MapView>

			<Search
				handleLocationSelected={(details: any, geometry: any) =>
					handleLocationSelected(details, geometry)
				}
			/>
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
