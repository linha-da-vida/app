import React from 'react';
import { View, Text } from 'react-native';
import {
	Container,
	TypeTitle,
	TypeDescription,
	TypeImage,
	RequestButton,
	RequestButtonText,
	TypesContainer,
	Type,
} from './styles';

import bike from '../../../assets/bike.png';
import walking from '../../../assets/walking.png';

export default function Details() {
	return (
		<Container>
			<TypeTitle>Navegação</TypeTitle>
			<TypeDescription>
				Escolha a opção mais segura para seu deslocamento
			</TypeDescription>

			<TypesContainer>
				<Type>
					<TypeImage source={walking} />
					<TypeTitle>Caminhada</TypeTitle>
					<TypeDescription>15 minutos</TypeDescription>
				</Type>

				<Type>
					<TypeImage source={bike} />
					<TypeTitle>Pedalada</TypeTitle>
					<TypeDescription>5 minutos</TypeDescription>
				</Type>
			</TypesContainer>

			<RequestButton onPress={() => {}}>
				<RequestButtonText>Iniciar viagem</RequestButtonText>
			</RequestButton>
		</Container>
	);
}
