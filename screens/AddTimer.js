import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import window from '../constants/dimensions';
import { newDB } from "../App";

export default class AddTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      totalDuration: 0,
      intervals: [],
    };
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handeRepChange = this._handeRepChange.bind(this);
    this._handleSetChange = this._handleSetChange.bind(this);
  }
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.title,
  });

  componentDidMount() {
    
  }

  _handleNameChange(name) {
    this.setState({
      name
    })
  };

  _handleSetChange(sets) {
    this.setState({
      sets
    })
  };

  _handeRepChange(reps) {
    this.setState({
      reps
    })
  }

  render() {
    const { state } = this.props.navigation;
    return (
      <View style={styles.addScreenContainer} >
        <View style={styles.name}>
          <Text>Excercise Name</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={this._handleNameChange}
            value={this.state.name}
            placeholder='Ender your exercise'
          />
        </View>

        <View style={styles.setAndRepContainer}>
          <View style={styles.setContainer}>
            <Text>Sets: </Text>
            <TextInput
              onChangeText={this._handleSetChange}
              value={this.state.sets}
              style={styles.setInput}
              keyboardType='numeric'
            />
          </View>

          <View style={styles.repContainer}>
            <Text>Reps: </Text>
            <TextInput
              onChangeText={this._handleRepChange}
              value={this.state.reps}
              style={styles.repInput}
              keyboardType='numeric'
            />
          </View>
        </View>
        <Button onPress={this.makeNewItem} title={`Make a new ${state.params.type}`} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addScreenContainer: {
    top: 20,
    alignItems: 'center'
  },
  inputStyle: {
    height: 40,
    width: 320,
    borderColor: '#b5b6b7',
    borderWidth: 2,
  },
  name: {

  },
  setAndRepContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  repInput: {
    height: 40,
    width: 125,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: '#b5b6b7'
  },
  setInput: {
    height: 40,
    width: 125,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#b5b6b7'
  }
});