import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountryScreen from "../../containers/screens/Country_Screen";
import MapScreen from "../../containers/screens/Map_Screen";
import MainStack from './MainStack';
import color from '../constant/color';
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Main"
        tabBarOptions={{
          style: {
            backgroundColor: color.blackLight
          },
          activeTintColor: color.white
        }}
      >
        <Tab.Screen 
          name="Main" 
          component={MainStack} 
          options={{
            tabBarIcon: (props) => <Icon name="appstore-o" size={26} color={props.color}/>
          }}
        />
        <Tab.Screen 
          name="Map" 
          component={MapScreen}
          options={{
            tabBarIcon: (props) => <Icon name="enviroment" size={26} color={props.color}/>
          }} 
        />
        <Tab.Screen 
          name="Country" 
          component={CountryScreen} 
          options={{
            tabBarIcon: (props) => <Icon name="earth" size={26} color={props.color}/>
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabRouter;