import styled from 'styled-components/native';

export const Container = styled.View`
	background: #fff;
	height: 300px;
	width: 100%;
	position: absolute;
	bottom: 0;
	shadow-color: #000;
	shadow-offset: 0 0;
	shadow-opacity: 0.2;
	shadow-radius: 10px;
	elevation: 3;
	border: 1px solid #ddd;
	align-items: center;
	padding: 20px;
`;

export const TypeTitle = styled.Text`
	font-size: 20px;
	color: #222;
`;

export const TypeDescription = styled.Text`
	color: #666;
	font-size: 14px;
`;

export const TypeImage = styled.Image`
	height: 80px;
	margin: 10px 0;
	width: 80px;
`;

export const RequestButton = styled.TouchableOpacity`
	background: #439355;
	justify-content: center;
	align-items: center;
	height: 44px;
	align-self: stretch;
	margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 18px;
`;

export const TypesContainer = styled.View`
	display: flex;
	flex-direction: row;
	flex: 1;
	width: 100%;
	justify-content: space-evenly;
	margin-top: 10px;
`;

export const Type = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
