import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	top: ${Constants.statusBarHeight}px;
	background: black;
	flex: 1;
	width: 100%;
	align-items: center;
`;

export const ProfileHeader = styled.View`
	height: 20%;
	background-color: green;
	width: 100%;
	padding: 20px 20px;
`;

export const PictureContainer = styled.View`
	width: 30%;
	background-color: red;
	display: flex;
	align-items: center;
`;

export const ProfilePicture = styled.Image`
	height: 100px;
	width: 100px;
`;

export const Username = styled.Text`
	color: white;
	font-size: 30px;
	font-weight: bold;
`;

export const City = styled.Text`
	color: white;
	font-size: 14px;
`;

export const Title = styled.Text`
	color: white;
`;
