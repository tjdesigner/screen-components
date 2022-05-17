import React from "react"
import { View } from "react-native"
import { Currency } from "./MoedaBRLStyle"

const MoedaBRL = (props) => (
  <View>
    <Currency>{props.currency}</Currency>
  </View>
)

export default MoedaBRL
