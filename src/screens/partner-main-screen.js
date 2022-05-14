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
  LabelTagMedium,
  LabelTagNear,
  LabelTagTagAway,
  LabelTitleList,
  Logo,
  SectionLegend,
  SectionList,
  SectionReward,
  TagAway,
  TagMedium,
  TagNear,
} from "./partner-main-screen-style"
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
        <TagNear>
          <LabelTagNear>próximos</LabelTagNear>
        </TagNear>
        <TagMedium>
          <LabelTagMedium>média distância</LabelTagMedium>
        </TagMedium>
        <TagAway>
          <LabelTagTagAway>distantes</LabelTagTagAway>
        </TagAway>
      </SectionLegend>
    </SectionList>
  </Container>
)

export default PartnerMainScreen
