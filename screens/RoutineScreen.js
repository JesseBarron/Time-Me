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
    AsyncStorage.getItem('test')
    .then(db => console.log('sanityyyyyyy checkkkkk', db))
  }

  render() {
    return (
      <View>
        <Text>This is the routine screen</Text>
      </View>
    );
  }
}
