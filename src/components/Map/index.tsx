import MapView from 'react-native-maps';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function index() {
	return (
		<View>
			<MapView
				style={styles.mapStyle}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
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
