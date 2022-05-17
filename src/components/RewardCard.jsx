import React from "react"
import { Container, Title } from "./RewardCardStyle"
import { IconCarPartner } from "./../assets/icons"

const RewardCard = (props) => {
  return (
    <Container style={{ backgroundColor: props.backgroundColor }}>
      <IconCarPartner fill="#138b13" />
      <Title style={{ color: props.color }}>{props.title}</Title>
    </Container>
  )
}

export default RewardCard
