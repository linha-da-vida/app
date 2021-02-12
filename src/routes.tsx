import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Map from './components/Map';

const Stack = createStackNavigator();

export default function routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Map'
					component={Map}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
