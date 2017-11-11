import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { AddButton } from '../components/addButton';

export default class RoutineScreen extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Routines',
    headerRight: (
      <AddButton
        routeName={props.navigation.state.routeName}
        onPress={() => props.navigation.navigate('AddRoutine', {
          title: 'Add a new Routine',
          type: 'Routine'          
        })}
      />
    ),
  })
  componentDidMount() {
    const newItem = {
      name: 'newItem',
      body: `I'm extremely Tired`,
      set: 22
    }
    newItem
    AsyncStorage.setItem('id', JSON.stringify(newItem))
  }
  
  render() {
    return (
      <View>
        <Text>This is the routine screen</Text>
      </View>
    );
  }
}