import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { AuthSession } from 'expo'
import { AddButton } from '../components/addButton';

export default class RoutineScreen extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }
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
_handlePress = () => {
  const redirect = AuthSession.getRedirectUrl()
  console.log(encodeURIComponent(redirect))
}
  render() {
    console.log('cmon masdjfha');
    return (
      <View>
        <Text>This is the routine screen</Text>
        <Button onPress={this._handlePress} title='Loging Using FaceBook'/>
      </View>
    );
  }
}
