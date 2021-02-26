import React from 'react';
import {
	Container,
	Title,
	PictureContainer,
	ProfileHeader,
	ProfilePicture,
	Username,
	City,
} from './styles';
import ProfilePic from '../../../assets/profile-pic.jpg';

export default function Rewards() {
	return (
		<Container>
			<ProfileHeader>
				<PictureContainer>
					<ProfilePicture source={ProfilePic} />
				</PictureContainer>

				<Username>Ana Paula</Username>
				<City>RECIFE, PE</City>
			</ProfileHeader>
			<Title>Rewards</Title>
		</Container>
	);
}
