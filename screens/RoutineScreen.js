import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { AddButton } from '../components/addButton';

export default class RoutineScreen extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Routines',
    headerRight: (
      <AddButton
        routeName={props.navigation.state.routeName}
        onPress={() => props.navigation.navigate('AddScreen', {
          title: 'Add a new Routine',
        })}
      />
    ),
  })
  render() {
    return (
      <View>
        <Text>This is the routine screen</Text>
      </View>
    );
  }
}