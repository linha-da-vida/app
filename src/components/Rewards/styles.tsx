import styled from 'styled-components/native';
import Constants from 'expo-constants';
import ProfilePic from '../../../assets/profile-pic.jpg';

export const Container = styled.View`
	top: ${Constants.statusBarHeight}px;
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
	height: 15%;
	padding: 15px;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
`;

export const InfoTitle = styled.Text`
	color: #5fdaff;
	font-size: 30px;
	font-weight: bold;
`;

export const InfoText = styled.Text`
	color: white;
	font-size: 15px;
`;

export const RewardsContainer = styled.View`
	width: 100%;
	height: 65%;
	padding: 15px;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
`;

export const RewardsTitle = styled.Text`
	color: black;
	font-size: 30px;
	font-weight: bold;
`;

export const RewardsCarouselContainer = styled.View`
	width: 100%;
	height: 90%;
	padding: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const RewardCard = styled.View`
	width: 160px;
	height: 80%;
	border-radius: 12px;
	background-color: blue;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
`;

export const RewardCardTitle = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
	margin-right: 10px;
`;
