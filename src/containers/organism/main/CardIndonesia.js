import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import CardInfoGrid from "../../../components/card/CardInfoGrid";
import color from "../../../config/constant/color";
import axios from "axios";
import api from "../../../config/constant/api";
import { useNavigation } from '@react-navigation/native';

const CardIndonesia = () => {
  const navigation = useNavigation();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get(api.apiM)
      .then((res) => {
        setData(res.data);
        console.log('HASIL', data);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  }
  return (
    <View style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{
          marginLeft: 10,
          color: color.white,
          fontSize: 20
          }}
        >
          Indonesia
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('IndonesianCase')}
        >
          <Text style={{
              marginRight: 10,
              color: color.white,
              fontSize: 16
            }}
          >
            Detail
          </Text>
        </TouchableOpacity>
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
        <>
          <View style={{flexDirection: 'row'}}>
            <CardInfoGrid
              color={color.yellow}
              status="Confirmed"
              // value={data.jumlahKasus}
            />

            <CardInfoGrid
              color={color.teal}
              status="Recovered"
              // value={data.sembuh}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CardInfoGrid
              color={color.red}
              status="Death"
              // value={data.meninggal}
            />

            <CardInfoGrid
              color={color.orange}
              status="Isolated"
              // value={data.perawatan.toLocaleString()}
            />
          </View>
        </>
      </View>
    </View>
  )
}

export default CardIndonesia

const styles = StyleSheet.create({})
