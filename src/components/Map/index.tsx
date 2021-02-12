import MapView from 'react-native-maps';
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	PermissionsAndroid,
} from 'react-native';
import * as Permission from 'expo-permissions';

export default function index() {
	return (
		<View style={{ flex: 1 }}>
			<MapView
				onMapReady={async () => {
					const { status } = await Permission.askAsync(Permission.LOCATION);
				}}
				style={styles.mapStyle}
				region={{
					latitude: -20.316839,
					longitude: -40.309921,
					latitudeDelta: 0.0143,
					longitudeDelta: 0.0134,
				}}
				showsUserLocation
				loadingEnabled
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
