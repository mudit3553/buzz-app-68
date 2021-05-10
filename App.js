
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"; 


import FBScreen from "../screens/FBScreen";
import InstagramScreen from "../screens/InstagramScreen";
 
export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
      );
  }
 
}

const TabNavigator = createBottomTabNavigator({
Facebook : {screen : FBScreen}, 
Instagram : {screen : InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
