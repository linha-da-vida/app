import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	position: absolute;
	top: ${Constants.statusBarHeight}px;
	width: 100%;
	background-color: #fff;
`;

export const TextInputContainer = styled.View`
	flex: 1;
	/* background-color: blue; */
	height: 54px;
	padding: 0 20px;
	border-top-width: 0;
	border-bottom-width: 0;
	justify-content: center;
`;

export const TextInput = styled.Text`
	font-size: 18px;
	/* flex: 1; */
	/* background-color: blue; */
	/* height: 54px; */
	/* margin: 0 20px; */
	/* border-top-width: 0; */
	/* border-bottom-width: 0; */
`;
