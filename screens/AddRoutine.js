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
import { randomId } from '../util/idGenerator';
import exerciseList from '../components/exerciseList';
import { newDB } from '../App'

const initialState = {
  routineName: '',
  name: '',
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
      name: '',
      sets: null,
      reps: null,
      weight: null,
      modalVisible: false,
      exercises: [{ name: 'test', reps: 20, sets: 3, weight: 90 }],
    };
    this.makeNewItem = this.makeNewItem.bind(this);
    this.saveRoutine = this.saveRoutine.bind(this);
  }
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.title,
  });

  componentDidMount() {
    AsyncStorage.getAllKeys()
      .then(keys => console.log(keys))
  }

  makeNewItem() {
    const { routineName, name, sets, reps, weight } = this.state;
    if (!name || !sets || !reps || !weight) {
      // console.log(exerciseName, sets, reps, weight)
      alert('Please Fill out the complete form')
    } else {
      let newExercise = {
        id: randomId(),
        name,
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

  saveRoutine() {
    const { routineName, exercises } = this.state;
    let newRoutine = {
      name: routineName,
      exercises
    }
    console.log('new Routine', this.props)
    newDB.create('routine', newRoutine)
    .then(res => {
      this.setState(initialState)
    })
  }

  render() {
    const { state } = this.props.navigation;
    const { routineName, exercises } = this.state;
    return (
      <View style={styles.addScreenContainer} >
        <View style={styles.header}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(routineName) => this.setState({ routineName })}
            value={this.state.routineName}
            placeholder="Routine Name"
            autoFocus={true}
          />
        </View>
        {
          (!!routineName) &&
          <View style={styles.addExercise}>
            <Button onPress={() => this.setState({ modalVisible: !this.state.modalVisible })} color="#274D00" fontWeight='bold' title='Add A New Exercise' />
          </View>
        }
        {
          (exercises.length >= 1) &&
          <View style={styles.saveRoutine}>
            <Button onPress={() => this.saveRoutine()} fontWeight='bold' fontSize={100} color="#C0E699" title='Save' />
          </View>
        }
        <View style={styles.exerciseListHeader}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Exercise List</Text>
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
          <View style={styles.modalContainer}>
            <View style={styles.name}>
              <Text style={{ alignSelf: 'center' }}>Excercise Name</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder='What Are you working on?'
                autoFocus={true}
              />
            </View>

            <View style={styles.setAndRepContainer}>
              <View style={styles.setContainer}>
                <Text style={{ alignSelf: 'center' }}>Sets: </Text>
                <TextInput
                  onChangeText={(sets) => this.setState({ sets })}
                  value={this.state.sets}
                  style={styles.setInput}
                  keyboardType='numeric'
                  placeholder="Set your Sets"
                />
              </View>

              <View style={styles.repContainer}>
                <Text style={{ alignSelf: 'center' }}>Reps: </Text>
                <TextInput
                  onChangeText={(reps) => this.setState({ reps })}
                  value={this.state.reps}
                  style={styles.repInput}
                  keyboardType='numeric'
                  placeholder="Set your Reps"
                />
              </View>

              <View style={styles.repContainer}>
                <Text style={{ alignSelf: 'center' }}>Weight: </Text>
                <TextInput
                  onChangeText={(weight) => this.setState({ weight })}
                  value={this.state.weight}
                  style={styles.repInput}
                  keyboardType='numeric'
                  placeholder="lbs"
                />
              </View>
            </View>
            <View style={styles.addExerciseBttn}>
              <Button onPress={this.makeNewItem} title={`Make a new ${state.params.type}`} />
            </View>
          </View>
        </Modal>
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
  modalContainer: {
    top: 30,
  },
  name: {
    alignSelf: 'center'
  },
  setAndRepContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
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
  },
  addExercise: {
    padding: 20,
    backgroundColor: '#C0E699',
    width: '45%',
    borderRadius: 15,
  },
  saveRoutine: {
    padding: 20,
    width: '45%',
    backgroundColor: '#90BF60',
    borderRadius: 15,
  },
  exerciseListHeader: {
    padding: 20,
  },
  addExerciseBttn: {
    padding: 15,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#90BF60',
    width: '50%',
    borderRadius: 10
  }
});
