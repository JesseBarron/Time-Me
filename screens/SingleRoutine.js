import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class SingleRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.title,
  })
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.singleRoutineContainer}>
        <FlatList
          data={params.routine.exercises}
          renderItem={({ item }) => {
            return (
              <View style={styles.exerciseListContainer}>
                <TouchableOpacity>
                  <View>
                    <Text style={styles.exerciseName}>{item.name}</Text>
                    <View style={{ height: .5, width: '40%', backgroundColor: 'black', alignSelf: 'center' }} />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text>{`Sets: ${item.sets}`}</Text>
                    <Text>{`Repitisions: ${item.reps}`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  singleRoutineContainer: {
    height: '100%',
    backgroundColor: '#274D00'
  },
  exerciseListContainer: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#C0E699',
    marginTop: 20,
    width: '95%',
    borderRadius: 15,
  },
  exerciseName: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
})
