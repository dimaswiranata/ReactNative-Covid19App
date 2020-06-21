import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CardInfoGrid from "../../../components/card/CardInfoGrid";
import color from "../../../config/constant/color";
import axios from "axios";
import api from "../../../config/constant/api";

const CardIndonesia = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get(api.apiID)
      .then((res) => {
        setData(res.data);
        console.log('result', data);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  }
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
          value={data.confirmed.value}
        />

        <CardInfoGrid
          color={color.teal}
          status="Recovered"
          value={data.recovered.value}
        />

        <CardInfoGrid
          color={color.red}
          status="Death"
          value={data.deaths.value}
        />
      </View>
      <Text style={{
        textAlign: 'right',
        marginVertical: 10,
        color: color.white
        }}
      >
        Last Update: {data.lastUpdate}
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
