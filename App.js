import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigator/stackNavigator';
import TabNavigator from './navigator/TabNavigator';
import firebase from './utility/firebase'

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator /> // The entry for your application should have only the Navitation route!!!
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
});
