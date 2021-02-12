import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Permission from 'expo-permissions';
import { getPixelSize } from '../../utils/getPixelSize';

import markerImage from '../../../assets/marker.png';
import {
	LocationBox,
	LocationText,
	LocationTimeBox,
	LocationTimeText,
	LocationTimeUnitText,
} from './styles';

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

	const [userRegion, setUserRegion] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0,
	});

	const [destination, setDestination] = useState({
		latitude: 0,
		longitude: 0,
		title: '',
	});
	const [destinationLoaded, setDestinationLoaded] = useState(false);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setRegion({
					latitude,
					longitude,
					latitudeDelta: 0.0143,
					longitudeDelta: 0.0134,
				});

				setUserRegion({
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

	interface Region {
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	}

	// Updates region every time the movement stops (whether user gesture or animation)
	const _onRegionChangeComplete = (region: Region) => {
		setRegion(region);
	};

	const getViewFromAbove = (result: any) => {
		if (mapView) {
			mapView.fitToCoordinates(result.coordinates, {
				edgePadding: {
					right: getPixelSize(40),
					left: getPixelSize(40),
					top: getPixelSize(40),
					bottom: getPixelSize(40),
				},
			});
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				onMapReady={async () => {
					const { status } = await Permission.askAsync(Permission.LOCATION);
				}}
				style={styles.mapStyle}
				region={region}
				onRegionChangeComplete={_onRegionChangeComplete}
				showsUserLocation
				loadingEnabled
				ref={(el) => {
					mapView = el;
				}}
			>
				{destinationLoaded && (
					<>
						<Directions
							origin={userRegion}
							destination={destination}
							onReady={(result: any) => {
								getViewFromAbove(result);

								setDuration(Math.floor(result.duration));
							}}
						/>
						<Marker coordinate={userRegion} anchor={{ x: 0, y: 0 }}>
							<LocationBox>
								<LocationTimeBox>
									<LocationTimeText>
										{duration === 0 ? '' : duration}
									</LocationTimeText>
									<LocationTimeUnitText>MIN</LocationTimeUnitText>
								</LocationTimeBox>

								<LocationText>Rua dos Bobos</LocationText>
							</LocationBox>
						</Marker>

						<Marker
							coordinate={destination}
							anchor={{ x: 0, y: 0 }}
							image={markerImage}
						>
							<LocationBox>
								<LocationText> {destination.title} </LocationText>
							</LocationBox>
						</Marker>
					</>
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
