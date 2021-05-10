import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FBScreen extends React.Component {
  render(){
    return (
      
        <View style={styles.container}>
          <Text style={styles.facebookText}>facebook</Text>
        </View>
      );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookText: {
    color:"blue" ,
    fontWeight: '"500',
    fontSize:"20",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
