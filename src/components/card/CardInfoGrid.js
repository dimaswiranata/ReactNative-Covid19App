import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from "../../config/constant/color";

const CardInfoGrid = ({color, status, value}) => {
  return (
    <View 
      style={{
        margin: 4, 
        flex: 1, 
        backgroundColor: color,
        borderRadius: 6,
        padding: 10
      }}
    >
      <Text style={{fontSize: 14, fontWeight: 'bold', color: colors.white}}>
        {status}
      </Text>
      <View style={{height: 1, backgroundColor: colors.black}}/>
      <Text style={{fontSize: 26, fontWeight: 'bold', color: colors.white}}>
        {value}
      </Text> 
    </View>
  )
}

export default CardInfoGrid

const styles = StyleSheet.create({})
