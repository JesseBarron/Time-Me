import React from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import window from '../constants/dimensions';
import { randomId } from '../util/idGenerator';
import exerciseList from '../components/exerciseList';

const initialState = {
  routineName: '',
  exercisesName: '',
  sets: null,
  reps: null,
  weight: null,
  modalVisible: false,
  exercises: [],
};

export default class AddRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routineName: '',
      exerciseName: '',
      sets: null,
      reps: null,
      weight: null,
      modalVisible: false,
      exercises: [],
    };
    this.makeNewItem = this.makeNewItem.bind(this);
  }
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.title,
  });

  componentDidMount() {
    AsyncStorage.getAllKeys()
    .then(keys => console.log(keys))
  }

  makeNewItem() {
    const { routineName, exerciseName, sets, reps, weight } = this.state;
    if (!exerciseName || !sets || !reps || !weight) {
      // console.log(exerciseName, sets, reps, weight)
      alert('Please Fill out the complete form')
    } else {
      let newExercise = {
        id: randomId(),
        exerciseName,
        sets,
        reps,
        weight
      }

      this.setState({
        exercises: [...this.state.exercises, newExercise],
        modalVisible: !this.state.modalVisible
      })
    }
    console.log(this.state.exercises, "this is the state");
  }

  render() {
    const { state } = this.props.navigation;
    const { routineName } = this.state;
    return (
      <View style={styles.addScreenContainer} >
        <View style={styles.header}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(routineName) => this.setState({ routineName })}
            value={this.state.routineName}
          />
        </View>
        <FlatList
          data={this.state.exercises}
          renderItem={exerciseList}
        />
        <Modal
          animation='fade'
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.name}>
            <Text>{this.state.routineName}</Text>
            <Text>Excercise Name</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(exerciseName) => this.setState({ exerciseName })}
              value={this.state.name}
              placeholder='What Are you working on?'
            />
          </View>

          <View style={styles.setAndRepContainer}>
            <View style={styles.setContainer}>
              <Text>Sets: </Text>
              <TextInput
                onChangeText={(sets) => this.setState({ sets })}
                value={this.state.sets}
                style={styles.setInput}
                keyboardType='numeric'
                placeholder="Set your Sets"
              />
            </View>

            <View style={styles.repContainer}>
              <Text>Reps: </Text>
              <TextInput
                onChangeText={(reps) => this.setState({ reps })}
                value={this.state.reps}
                style={styles.repInput}
                keyboardType='numeric'
                placeholder="Set your Reps"
              />
            </View>

            <View style={styles.repContainer}>
              <Text>Weight: </Text>
              <TextInput
                onChangeText={(weight) => this.setState({ weight })}
                value={this.state.weight}
                style={styles.repInput}
                keyboardType='numeric'
                placeholder="lbs"
              />
            </View>
          </View>
          <Button onPress={this.makeNewItem} title={`Make a new ${state.params.type}`} />
        </Modal>
        {
          !!routineName &&
          <Button onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} title='Add A New Exercise' />
        }
      </View >
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