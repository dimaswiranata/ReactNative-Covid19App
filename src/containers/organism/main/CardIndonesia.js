import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CardInfoGrid from "../../../components/card/CardInfoGrid";
import color from "../../../config/constant/color";

const CardIndonesia = () => {
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
      <Text style={{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
        }}
      >
        Indonesia
      </Text>
      <View style={{flexDirection: 'row'}}>
        <CardInfoGrid
          color={color.yellow}
          status="Confirmed"
          value="1234"
        />

        <CardInfoGrid
          color={color.teal}
          status="Recovered"
          value="1234"
        />

        <CardInfoGrid
          color={color.red}
          status="Death"
          value="1234"
        />
      </View>
      <Text style={{
        textAlign: 'right',
        marginVertical: 10,
        color: color.white
        }}
      >
        Last Update : 2020-01-01:00:00:00
      </Text>
      <Button 
        title="Detail"
        onPress={() => console.log('clicked')}
      />
    </View>
  )
}

export default CardIndonesia

const styles = StyleSheet.create({})
