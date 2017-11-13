import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import MainNavigator from './navigator/stackNavigator';
import AsyncStorageDB from './util/AsyncStorageDB';

const newExercises = [{
  id: 0,
  name: 'Leg Day',
  exercises: [
    {
      name: 'lunges',
      sets: 5,
      reps: 15,
      weight: 90,
    },
    {
      name: 'squats',
      sets: 5,
      reps: 15,
      weight: 180,
    }
  ]
},
{
  id: 1,
  name: 'Arm Day',
  exercises: [
    {
      name: 'Bicept Curls',
      sets: 5,
      reps: 15,
      weight: 40,
    }
  ]
}
]

export const newDB = new AsyncStorageDB('test')
const routine = newDB.define('routine', newExercises);
const timer = newDB.define('timer', []);
newDB.sync()
  .then(something => {
    console.log(something, 'synchronized database')
  })
  .catch(err => console.log(err));



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
