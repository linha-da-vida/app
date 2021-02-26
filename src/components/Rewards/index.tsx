import React from 'react';
import {
	Container,
	Title,
	ProfileHeader,
	ProfilePicture,
	Username,
} from './styles';
import ProfilePic from '../../../assets/profile-pic.jpg';

export default function Rewards() {
	return (
		<Container>
			<ProfileHeader>
				<ProfilePicture source={ProfilePic} />
				<Username>Ana Paula</Username>
			</ProfileHeader>
			<Title>Rewards</Title>
		</Container>
	);
}
