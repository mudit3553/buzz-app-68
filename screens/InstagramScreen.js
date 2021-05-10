import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 

export default class InstagramScreen extends React.Component {
  render(){
    return (
      
        <View style={styles.container}>
          <Text style={styles.instragramText}>instagram</Text>
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
  instragramText: {
    color:"blue" ,
    fontWeight: '"500',
    fontSize:"20",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
