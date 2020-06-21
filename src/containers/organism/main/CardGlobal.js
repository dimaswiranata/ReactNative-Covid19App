import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CardInfo from "../../../components/card/CardInfo";
import color from "../../../config/constant/color";
import axios from "axios";
import api from "../../../config/constant/api";

const CardGlobal = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get(api.api)
      .then((res) => {
        setData(res.data);
        // console.log('result', data);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  }

  return (
    <View style={{marginVertical: 10}}>
      <Text style={{
        marginLeft: 10,
        color: color.white,
        fontSize: 20
        }}
      >
        Global
      </Text>
      <View
        style={{
        backgroundColor: color.blackLight,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
        }}
      >
      {data && (
        <>
          <CardInfo
            col="yellow"
            status="Confirmed"
            value={data.confirmed.value.toLocaleString()}
          />
            
          <CardInfo
            col="green"
            status="Recovered"
            value={data.recovered.value}
          />

          <CardInfo
            col="red"
            status="Death"
            value={data.deaths.value}
          />
        </>
      )}

      </View>
    </View>
  )
}

export default CardGlobal

const styles = StyleSheet.create({})
