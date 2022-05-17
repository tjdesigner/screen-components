import React from "react"

const mockDataCarList = [
  {
    id: 1,
    badgeValue: 1,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 1000,
    distance: "proximo",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV 9092" },
      { carName: "Variante", carColor: "azul", placa: "PAZ 2022" },
    ],
  },
  {
    id: 2,
    badgeValue: 3,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 1000,
    distance: "media_distancia",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV 9092" },
      { carName: "Variante", carColor: "azul", placa: "PAZ 2022" },
    ],
  },
  {
    id: 3,
    badgeValue: 5,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 1000,
    distance: "media_distancia",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV 9092" },
      { carName: "Variante", carColor: "azul", placa: "PAZ 2022" },
    ],
  },
  {
    id: 4,
    badgeValue: 2,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 1000,
    distance: "distantes",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV 9092" },
      { carName: "Variante", carColor: "azul", placa: "PAZ 2022" },
    ],
  },
  {
    id: 5,
    badgeValue: 7,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 1000,
    distance: "distantes",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV 9092" },
      { carName: "Variante", carColor: "azul", placa: "PAZ 2022" },
    ],
  },
]

import {
  Container,
  Divisor,
  Header,
  ImageMocar,
  LabelName,
  RewardHighlightContainer,
  RewardHighlightValue,
  LabelRewardInfo,
  LabelTitleList,
  Logo,
  SectionLegend,
  SectionList,
  SectionReward,
} from "./partner-main-screen-style"
import { Tag, RewardCard, MoedaBRL } from "./../components"
import { View, Text } from "react-native"
import { formataMoeda } from "./../utils/"
import { IconCarPartner } from "./../assets/icons"
const LogoMocar = require("./../../assets/logo.png")
const ImgMocar = require("./../../assets/Grupo_348.png")

const PartnerMainScreen = ({ navigation }) => {
  const getBgColor = (distance) => {
    if (distance === "proximo") {
      return "#cef2a4"
    } else if (distance === "media_distancia") {
      return "#fbdd68"
    } else {
      return "#f2a4a4"
    }
  }

  const getIconColor = (distance) => {
    if (distance === "proximo") {
      return "#138b13"
    } else if (distance === "media_distancia") {
      return "#604a00"
    } else {
      return "#c40000"
    }
  }

  const getTotalRewardValue = mockDataCarList.reduce((sum, obj) => {
    return sum + obj.reward
  }, 0)

  return (
    <Container>
      <Header>
        <LabelName>Henrique</LabelName>
        <Logo source={LogoMocar} resizeMode={"contain"} />
        <ImageMocar source={ImgMocar} resizeMode={"contain"} />
      </Header>
      <SectionReward>
        <LabelRewardInfo>Total de recompensa na sua região:</LabelRewardInfo>
        <RewardHighlightContainer>
          <MoedaBRL currency="R$" />
          <RewardHighlightValue>
            {formataMoeda(getTotalRewardValue)}
          </RewardHighlightValue>
        </RewardHighlightContainer>
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
          <Tag
            backgroundColor="#f2a4a4"
            color="#c40000"
            LabelName="distantes"
          />
        </SectionLegend>
        {mockDataCarList.map((card) => (
          <RewardCard
            carList={card.carList.map((car, index) => (
              <View
                height={62}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 8,
                  marginTop: index > 0 && 6,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {console.log(index)}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingRight: 12.9,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: 12.9,
                    }}
                  >
                    <IconCarPartner fill="#999999" />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: 12.9,
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {car.carName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {car.carColor}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingRight: 12.9,
                  }}
                ></View>

                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingRight: 12.9,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                    }}
                  >
                    Placa
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {car.placa}
                  </Text>
                </View>
              </View>
            ))}
            key={card.id}
            iconBgColor={getIconColor(card.distance)}
            badge={mockDataCarList.length > 0}
            badgeBorderColor="#ffffff"
            badgeBackground="#dd1a1e"
            cardbBackgroundColor={getBgColor(card.distance)}
            badgeTextColor="#ffffff"
            badgeValue={card.badgeValue}
            LabelRewardTextColor="#4d4d4d"
            RewardTextColor="#4d4d4d"
            address={card.address}
            labelReward="Recompensa (R$)"
            rewardValue={formataMoeda(1000)}
          />
        ))}
      </SectionList>
    </Container>
  )
}

export default PartnerMainScreen
