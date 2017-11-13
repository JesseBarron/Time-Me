import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import AddRoutine from '../screens/AddRoutine';
import AddTimer from '../screens/AddTimer';
import SingleRoutine from '../screens/SingleRoutine';

const RootNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    AddRoutine: {
      screen: AddRoutine,
    },
    AddTimer: {
      screen: AddTimer,
    },
    RoutineView: {
      screen: SingleRoutine,
    },
  },
  {
    navigationOptions: () => ({
      // headerTitleStyle: {
      //   fontWeight: 'normal'
      // }
    }),
  }
);

export default class MainNavigator extends React.Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
