import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "../../containers/screens/Main_Screen";
import CountryScreen from "../../containers/screens/Country_Screen";
import MapScreen from "../../containers/screens/Map_Screen";

const Tab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Country" component={CountryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabRouter;