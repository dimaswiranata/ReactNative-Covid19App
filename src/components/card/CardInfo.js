import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from "../../config/constant/color";

const CardInfo = ({col, status, value}) => {
  return (
    <View style={{marginVertical: 4}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: col}}>
        {status}
      </Text>
      <Text style={{fontSize: 26, color: color.white}}>
        {value}
      </Text> 
    </View>
  )
}

export default CardInfo

const styles = StyleSheet.create({})
