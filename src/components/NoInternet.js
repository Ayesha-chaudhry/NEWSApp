import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import {MaterialIcons}  from '@expo/vector-icons';
import { PRIMARY_SCREEN_COLOR, LIGHTPURPLE_COLOR } from '../../res/colors';


const NoInternet = () => {
  return (
    <View style={styles.container}>
    <MaterialIcons name="signal-wifi-off" size={24} color="#3e2465"/>
      <Text style={styles.noInterntText}>No Internet Connected!</Text>
      <StatusBar backgroundColor="#3e2465" barStyle="light-content" />
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noInterntText : {
    fontWeight : '500',
    fontSize : 16,
    color : LIGHTPURPLE_COLOR
  }
});