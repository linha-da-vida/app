import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	Dimensions,
	Image,
} from 'react-native';
// import styles from './styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import Map from '../Map';
import Rewards from '../Rewards';

const SecondRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#275E4D' }]}></View>
);

const FirstRoute = () => (
	<View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const getTabBarIcon = (props: any) => {
	const { route } = props;

	if (route.key === 'rewards') {
		return <FontAwesome name='trophy' size={24} color='white' />;
	} else if (route.key === 'donations') {
		return <MaterialIcons name='update' size={24} color='white' />;
	} else if (route.key === 'account') {
		return <FontAwesome name='user' size={20} color='white' />;
	} else if (route.key === 'map') {
		return <FontAwesome name='map-marker' size={24} color='white' />;
	} else if (route.key === 'settings') {
		return <FontAwesome5 name='cog' size={20} color='white' />;
	}
};

const initialLayout = { width: Dimensions.get('window').width };

export default function index({ navigation }: any) {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: 'donations',
		},
		{ key: 'rewards' },
		{
			key: 'map',
		},
		{
			key: 'account',
		},

		{
			key: 'settings',
		},
	]);

	const renderScene = SceneMap({
		donations: FirstRoute,
		rewards: SecondRoute,
		map: Map,
		account: Rewards,
		settings: FirstRoute,
	});

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={(props: any) => (
				<TabBar
					{...props}
					indicatorStyle={{ backgroundColor: '#04A777' }}
					renderIcon={(props: any) => getTabBarIcon(props)}
					style={{ backgroundColor: 'black' }}
				/>
			)}
			tabBarPosition='bottom'
		/>
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});
