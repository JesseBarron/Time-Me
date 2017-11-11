import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {AddButton} from '../components/addButton';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    }
  }

  static navigationOptions = (props) => ({
    title: 'Timers',
    headerRight: (
      <AddButton
        routeName={props.navigation.state.routeName}
        onPress={() => props.navigation.navigate('AddTimer', {
          title: 'Add A New Timer',
          type: 'Timer'
        })}
      />
    ),
  }); //Components need to Be capitalized else reactNative will thorw an invariant error

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.handleAddTimer}>
          <Text style={{ color: this.state.color }} >This is the Timers View</Text>
        </TouchableOpacity>
      </View>
    );
  }
}