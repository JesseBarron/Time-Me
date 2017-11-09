import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.title,
    headerRight: 
  });

  render() {
    return (
      <View style={styles.addScreenContainer} >
        <Text>AddScreen</Text>
        <TextInput style={styles.inputStyle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addScreenContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  inputStyle: {
    height: 40,
    width: '90%',
    borderColor: 'green',
    borderWidth: 2
  }
});