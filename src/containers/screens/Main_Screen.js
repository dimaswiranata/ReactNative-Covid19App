import React from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import color from '../../../src/config/constant/color';
import CardGlobal from "../organism/main/CardGlobal";
import CardIndonesia from "../organism/main/CardIndonesia";

const MainScreen = () => {
  return (
    <ScrollView 
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
      <CardGlobal/>
      <CardIndonesia/>
    </ScrollView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
