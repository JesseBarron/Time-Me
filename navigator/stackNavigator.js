import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import AddScreen from '../screens/AddScreen';



const RootNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    AddScreen: {
      screen: AddScreen,
    }
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