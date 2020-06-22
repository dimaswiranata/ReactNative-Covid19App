import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../containers/screens/Main_Screen';
import color from '../constant/color';
import Icon from "react-native-vector-icons/Ionicons";
import IndonesianCase from '../../containers/screens/IndonesianCase';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: color.black
        },
        headerTintColor: color.white
      }}
    >
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Covid19',
          headerLeftContainerStyle: {
            marginLeft: 10
          },
          headerLeft: () => (
            <Image 
              style={{width: 40, height: 40}}
              source={{uri: 
                "https://cdn3.iconfinder.com/data/icons/medcare/512/Virus-512.png"
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 10
          },
          headerRight: () => (
            <TouchableOpacity>
              <Icon 
                name="md-alert" 
                size={30}
                color={color.white}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="IndonesianCase"
        component={IndonesianCase}
        options={{
          title: 'Indonesia'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack;
