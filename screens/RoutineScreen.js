import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import Expo,{ AuthSession, Google, WebBrowser} from 'expo'
import { AddButton } from '../components/addButton';

export default class RoutineScreen extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {

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

_handlePress = async () => {
  try{
    // const info = await Google.logInAsync({
    //   behavoir: 'web',
    //   scopes: ['email'],
    //   iosClientId:
    // })
    // const info = await WebBrowser.openAuthSessionAsync('https://github.com/login/oauth/authorize/?client_id=63b3ae97e9b8a2cf9fac')
    const info = await WebBrowser.openAuthSessionAsync('http://localhost:8080/auth/facebook/login')
    console.log(info);
    console.log(Expo.Constants.linkingUri);
  } catch(err){
    console.log(err, "ERROR")
  }
}

  render() {
    return (
      <View>
        <Text>This is the routine screen</Text>
        <Button onPress={this._handlePress} title='Loging Using FaceBook'/>
      </View>
    );
  }
}
