import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import MainNavigator from './navigator/stackNavigator';
import AsyncStorageDB from './util/AsyncStorageDB';

const newExercises = {
  name: 'LegDay',
  exercises: [
    {
      name: 'lunges',
      sets: 5,
      reps: 8
    }
  ],
};

export const newDB = new AsyncStorageDB('test')
const routine = newDB.define('routine', []);
const timer = newDB.define('timer', [{ fakeRow: 34 }]);
newDB.sync()
  .then(something => {
    console.log(something, 'synchronized database')
  })



export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
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
