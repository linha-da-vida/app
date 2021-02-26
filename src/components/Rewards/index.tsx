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
	RewardsContainer,
	RewardsTitle,
	RewardsCarouselContainer,
	RewardCard,
	RewardCardTitle,
	RewardImage,
} from './styles';
import ProfilePic from '../../../assets/profile-pic.jpg';
import Festival from '../../../assets/festival.jpg';
import TemBici from '../../../assets/tembici_promo.jpg';

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

			<RewardsContainer>
				<RewardsTitle>Recompensas</RewardsTitle>
				<RewardsCarouselContainer>
					<RewardCard>
						<RewardImage source={Festival} />
						<RewardCardTitle>Vale Cultural</RewardCardTitle>
					</RewardCard>

					<RewardCard>
						<RewardImage source={TemBici} />
						<RewardCardTitle>Vale Cultural</RewardCardTitle>
					</RewardCard>
				</RewardsCarouselContainer>
			</RewardsContainer>

			<Title>Rewards</Title>
		</Container>
	);
}
