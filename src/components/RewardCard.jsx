import React from "react"
import {
  CardPrtnerContainer,
  IconContainer,
  Badge,
  TextContainer,
  Title,
  LabelContainer,
  Label,
  Reward,
} from "./RewardCardStyle"
import { Text, View } from "react-native"
import { IconCarPartner } from "./../assets/icons"
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native"

const RewardCard = (props) => {
  const HeaderAccordion = () => (
    <CardPrtnerContainer
      style={{ backgroundColor: props.cardbBackgroundColor }}
      carList={props.carList}
    >
      <IconContainer badge={props.badge}>
        <IconCarPartner fill={props.iconBgColor} />
        {props.badge && (
          <Badge
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: props.badgeBackground,
              borderColor: props.badgeBorderColor,
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                color: props.badgeTextColor,
                fontSize: 12,
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              {props.badgeValue}
            </Text>
          </Badge>
        )}
      </IconContainer>
      <TextContainer>
        <Title style={{ color: props.color, fontFamily: "Roboto" }}>
          {props.address}
        </Title>
        <LabelContainer>
          <Label style={{ color: props.LabelRewardTextColor }}>
            {props.labelReward}
          </Label>
          <Reward style={{ color: props.RewardTextColor }}>
            {props.rewardValue}
          </Reward>
        </LabelContainer>
      </TextContainer>
    </CardPrtnerContainer>
  )

  return (
    <Collapse>
      <CollapseHeader>
        <HeaderAccordion carList={props.carList} />
      </CollapseHeader>
      <CollapseBody paddingHorizontal={16} marginBottom={10}>
        {props.carList}
      </CollapseBody>
    </Collapse>
  )
}

export default RewardCard
