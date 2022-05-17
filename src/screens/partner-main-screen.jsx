import React from "react"
import { StatusBar } from "react-native"

import {
  Container,
  Divisor,
  Header,
  ImageMocar,
  LabelName,
  LabelReward,
  LabelRewardInfo,
  LabelTitleList,
  Logo,
  SectionLegend,
  SectionList,
  SectionReward,
} from "./partner-main-screen-style"
import { Tag, RewardCard } from "./../components"
const LogoMocar = require("./../../assets/logo.png")
const ImgMocar = require("./../../assets/Grupo_348.png")

const PartnerMainScreen = ({ navigation }) => (
  <Container>
    <Header>
      <LabelName>Henrique</LabelName>
      <Logo source={LogoMocar} resizeMode={"contain"} />
      <ImageMocar source={ImgMocar} resizeMode={"contain"} />
    </Header>
    <SectionReward>
      <LabelRewardInfo>Total de recompensa na sua região:</LabelRewardInfo>
      <LabelReward>R$ 300.000,00</LabelReward>
      <Divisor />
    </SectionReward>
    <SectionList>
      <LabelTitleList>Desaparecidos:</LabelTitleList>
      <SectionLegend>
        <Tag backgroundColor="#cef2a4" color="#138b13" LabelName="próximos" />
        <Tag
          backgroundColor="#fbdd68"
          color="#604a00"
          LabelName="média distância"
        />
        <Tag backgroundColor="#f2a4a4" color="#c40000" LabelName="distantes" />
      </SectionLegend>
      <RewardCard backgroundColor="#cef2a4" color="red" title="Titulo" />
    </SectionList>
  </Container>
)

export default PartnerMainScreen
