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
	InfoCard,
	InfoTitle,
	InfoText,
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
			<InfoCard>
				<InfoTitle>#CidadãoConsciente</InfoTitle>
				<InfoText>
					Participe da comunidade e ganhe pontos que podem ser trocados por
					recompensas!
				</InfoText>
			</InfoCard>

			<Title>Rewards</Title>
		</Container>
	);
}
