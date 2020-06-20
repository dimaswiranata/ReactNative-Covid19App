import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import color from '../../../src/config/constant/color';
import CardInfo from "../../../src/components/card/CardInfo";

const MainScreen = () => {
  return (
    <View 
      style={{
        backgroundColor: color.black,
        flex: 1
      }}
    >
      <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Image 
          style={{width: 50, height: 50}}
          source={{uri: 
            "https://cdn3.iconfinder.com/data/icons/medcare/512/Virus-512.png"
          }}
        />
        <Button 
          title="test"
          onPress={() => console.log('Halo')}
        />
      </View>
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
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
