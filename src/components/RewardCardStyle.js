import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const totalWidthScreen  = Dimensions.get('window').width;
console.log(totalWidthScreen)

export const CardPrtnerContainer = styled.View`
  height: 65px;
  margin: 0 16px 10px;
  border-radius: 9px;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  justify-content: center;
  height: 65px;
  padding-left: 11px;
  padding-right: 27px;
`;

export const Badge = styled.View`
  position: absolute;
  left: 18px;
  bottom: 35px;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 50px;
`;

export const TextContainer = styled.View`
  height: 65px;
  width: ${totalWidthScreen - 90};
  border-radius: 9px;
  justify-content: space-between;
  padding-right: 23px ;
`;

export const Title = styled.Text`
  font-family: Roboto-Medium;
  font-size: 16px;
  text-align: left;
  margin-top: 6px;
  font-weight: bold ;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px ;
  align-items: center;
`;

export const Reward = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-family: Roboto-Medium;
  font-size: 12px;
  text-align: left;
`;