import React from 'react';
import { Container, Title, ProfileHeader, ProfilePicture } from './styles';
import ProfilePic from '../../../assets/profile-pic.png';

export default function Rewards() {
	return (
		<Container>
			<ProfileHeader>
				<ProfilePicture source={ProfilePic} />
			</ProfileHeader>
			<Title>Rewards</Title>
		</Container>
	);
}
