import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import axios from "axios";
import api from '../../config/constant/api';
import color from '../../config/constant/color';

const CountryScreen = () => {
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
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.country_region}</Text>
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
            Positif {item.confirmed}
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
            Sembuh {item.recovered}
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
            Meninggal {item.deaths}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getData();
  }, [])
 
  const getData = async () => {
    await axios.get(api.apiG)
      .then((res) => {
        setData(res.results);
        console.log('RESULT', data);
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
        // keyExtractor={data.last_updated}
      />
    </SafeAreaView>
  )
}

export default CountryScreen

const styles = StyleSheet.create({})
