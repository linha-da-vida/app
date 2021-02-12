import React from 'react';
import { View, Text } from 'react-native';
import {
	Container,
	TypeTitle,
	TypeDescription,
	TypeImage,
	RequestButton,
	RequestButtonText,
} from './styles';

import uberX from '../../../assets/uberx.png';

export default function Details() {
	return (
		<Container>
			<TypeTitle>Popular</TypeTitle>
			<TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

			<TypeImage source={uberX} />
			<TypeTitle>UberX</TypeTitle>
			<TypeDescription>R$ 6,00</TypeDescription>

			<RequestButton onPress={() => {}}>
				<RequestButtonText>SOLICITAR UBERX</RequestButtonText>
			</RequestButton>
		</Container>
	);
}
