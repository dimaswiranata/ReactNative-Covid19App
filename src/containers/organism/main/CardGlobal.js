import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CardInfo from "../../../components/card/CardInfo";
import color from "../../../config/constant/color";

const CardGlobal = () => {
  return (
    <View
      style={{
      backgroundColor: color.blackLight,
      margin: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10
      }}
    >
      <CardInfo
        color="yellow"
        status="Confirmed"
        value="1234"
      />
        
      <CardInfo
        color="green"
        status="Recovered"
        value="1234"
      />

      <CardInfo
        color="red"
        status="Death"
        value="1234"
      />

    </View>
  )
}

export default CardGlobal

const styles = StyleSheet.create({})
