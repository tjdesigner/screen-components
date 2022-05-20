import React from "react"

const mockDataCarList = [
  {
    id: 1,
    badgeValue: 1,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 12300,
    distance: "proximo",
    carList: [
      { carName: "Fiat Uno", carColor: "branco", placa: "JEV5748" },
      { carName: "Corsa", carColor: "azul", placa: "JPW2134" },
    ],
  },
  {
    id: 2,
    badgeValue: 3,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 14500,
    distance: "media_distancia",
    carList: [
      { carName: "Ford Ka", carColor: "preto", placa: "REH4355" },
      { carName: "Fiat Palio", carColor: "vermelho", placa: "JEJ7632" },
    ],
  },
  {
    id: 3,
    badgeValue: 5,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 33000,
    distance: "media_distancia",
    carList: [
      { carName: "March", carColor: "prata", placa: "FYZ9901" },
      { carName: "HB20S", carColor: "branco", placa: "PAY2215" },
    ],
  },
  {
    id: 4,
    badgeValue: 2,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 35000,
    distance: "distantes",
    carList: [
      { carName: "Civic", carColor: "cinza", placa: "HGG9092" },
      { carName: "Gol", carColor: "prata", placa: "HJA2022" },
    ],
  },
  {
    id: 5,
    badgeValue: 7,
    address: "SQS 212 - Bloco B - Brasilia - DF",
    reward: 25200,
    distance: "distantes",
    carList: [
      { carName: "HB20", carColor: "branco", placa: "KLQ1377" },
      { carName: "Fiat Punto", carColor: "azul", placa: "QRQ5534" },
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
import { IconCar } from "./../assets/icons"
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

  const applyMask = (str, mask) => {
    let i = 0
    return mask.replaceAll("x", () => str[i++] || "")
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
                key={index}
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
                    <IconCar fill="#999999" />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: 12.9,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#4d4d4d",
                      }}
                    >
                      {car.carName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        color: "#4d4d4d",
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
                      textTransform: "capitalize",
                      color: "#4d4d4d",
                    }}
                  >
                    Placa
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#4d4d4d",
                    }}
                  >
                    {applyMask(car.placa, "xxx-xx**")}
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
            addressColor="#4d4d4d"
            labelReward="Recompensa (R$)"
            rewardValue={formataMoeda(card.reward)}
          />
        ))}
      </SectionList>
    </Container>
  )
}

export default PartnerMainScreen
