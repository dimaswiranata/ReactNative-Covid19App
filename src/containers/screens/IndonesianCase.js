import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import axios from "axios";
import api from '../../config/constant/api';
import color from '../../config/constant/color';

const IndonesianCase = () => {
  const [data, setData] = useState([]);

  const renderItem = ({item}) => {
    return (
      <View style={{
          backgroundColor: color.white, 
          margin:8, 
          padding: 10,
          borderRadius: 8
        }}
      >
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.provinsi}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text 
            style={{
              flex: 1, 
              backgroundColor: color.yellow, 
              color: color.white,
              padding: 4,
              fontWeight: 'bold'
            }}
          >
            Positif {item.kasusPosi}
          </Text>
          <Text 
            style={{
              flex: 1, 
              backgroundColor: color.teal, 
              color: color.white,
              padding: 4,
              fontWeight: 'bold'
            }}
          >
            Sembuh {item.kasusSemb}
          </Text>
          <Text 
            style={{
              flex: 1, 
              backgroundColor: color.red, 
              color: color.white,
              padding: 4,
              fontWeight: 'bold'
            }}
          >
            Meninggal {item.kasusMeni}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get(api.apiM + "/provinsi")
      .then((res) => {
        setData(res.data.data);
        // console.log('RESULT', data);
      })
      .catch((err) => {
        console.log('error: ', err.message);
      });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={data.fid}
      />
    </SafeAreaView>
  )
}

export default IndonesianCase

const styles = StyleSheet.create({})
