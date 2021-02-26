import React from 'react';
import {
	Container,
	Title,
	UserDetailsContainer,
	PictureContainer,
	ProfileHeader,
	ProfilePicture,
	Username,
	City,
	UserLevelBar,
	UserLevel,
} from './styles';
import ProfilePic from '../../../assets/profile-pic.jpg';

export default function Rewards() {
	return (
		<Container>
			<ProfileHeader>
				<PictureContainer>
					<ProfilePicture source={ProfilePic} />
				</PictureContainer>

				<UserDetailsContainer>
					<Username>Ana Paula</Username>
					<City>RECIFE, PE</City>

					<UserLevelBar>
						<UserLevel />
					</UserLevelBar>
				</UserDetailsContainer>
			</ProfileHeader>
			<Title>Rewards</Title>
		</Container>
	);
}
