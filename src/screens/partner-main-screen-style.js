import styled from 'styled-components/native';
import {Platform} from 'react-native'

console.log(Platform.OS === "ios")

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: #f3f3f3;
`;

export const Header = styled.View`
  height: ${Platform.OS === "ios" ? `${116}px` : 65};;
  padding-top: ${Platform.OS === "ios" ? `${50}px` : 0};
  flex-direction: row;
  justify-content: space-around;
  background-color: #6e6e6e;
`;

export const LabelName = styled.Text`
  margin: 20px 0px 12.7px 0px;
  font-family: Roboto-Bold;
  font-size: 22px;
  text-align: left;
  color: #fff;
`;

export const Logo = styled.Image`
  width: 79.9px;
  height: 81px;
  margin-top: 2.2px;
`;

export const ImageMocar = styled.Image`
  width: 90.4px;
  height: 34.1px;
  margin: 20px 0px 0px 0px;
`;

export const SectionReward = styled.View`
  margin: 17.5px 0px 19.5px 0px;
`;

export const LabelRewardInfo = styled.Text`
  margin: 17.5px 24px 6px 20px;
  font-family: Roboto-Bold;
  font-size: 12px;
  text-align: left;
  color: #4d4d4d;
`;

export const RewardHighlightContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;

export const RewardHighlightValue= styled.Text`
  font-family: Roboto-Bold;
  font-size: 38px;
  margin-left: 8px;
  color: #292929;
`;

export const Divisor = styled.View`
  height: 1px;
  margin: 18px 16px 0;
  opacity: 0.45;
  background-color: #4d4d4d;
`;

export const SectionList = styled.View``;

export const LabelTitleList = styled.Text`
  margin: 0px 23px 11px 20px;
  font-family: Roboto-Bold;
  font-size: 12px;
  text-align: left;
  color: #4d4d4d;
`;

export const MoedaBRL = styled.Text`
  font-size: 16px;
`

export const SectionLegend = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px ;
`;

export const LabelTagNear = styled.Text`
  font-family: Roboto-Medium;
  font-size: 12px;
  text-align: left;
  color: #138b13;
  margin: 0px 24px 1px 24px;
`;

export const LabelTagMedium = styled.Text`
  font-family: Roboto-Medium;
  font-size: 12px;
  text-align: left;
  color: #604a00;
  margin: 0px 24px 1px 24px;
`;

export const TagAway = styled.View`
  height: 17px;
  margin: 11px 2px 13px 16px;
  border-radius: 9px;
  background-color: #f2a4a4;
`;

export const LabelTagTagAway = styled.Text`
  font-family: Roboto-Medium;
  font-size: 12px;
  text-align: left;
  color: #c40000;
  margin: 0px 24px 1px 24px;
`;
