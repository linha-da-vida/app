import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
	top: ${Constants.statusBarHeight}px;
	background: black;
	flex: 1;
	width: 100%;
	align-items: center;
	flex-direction: column;
`;

export const ProfileHeader = styled.View`
	height: 20%;
	background-color: green;
	width: 100%;
	padding: 20px 20px;
	display: flex;
	flex-direction: row;
`;

export const PictureContainer = styled.View`
	width: 30%;
	display: flex;
	align-items: center;
`;

export const UserDetailsContainer = styled.View`
	width: 70%;
	display: flex;
	align-items: flex-start;
	margin-left: 10px;
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

export const UserLevelBar = styled.View`
	background-color: whitesmoke;
	border-radius: 12px;
	width: 90%;
	height: 15px;
	margin-top: 20px;
`;

export const UserLevel = styled.View`
	background-color: #09c5d6;
	border-radius: 12px;
	width: 70%;
	height: 15px;
`;

export const InfoCard = styled.View`
	background-color: #14ad14;
	width: 100%;
	height: 100px;
`;
