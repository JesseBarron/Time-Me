import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { newDB } from '../App';
import { AddButton } from '../components/addButton';
import { ListSeparator } from '../components/listSeparator';


export default class RoutineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routines: [{
          id: 0,
          name: 'Leg Day',
          exercises: [
            {
              name: 'lunges',
              sets: 5,
              reps: 15,
              weight: 90,
            },
            {
              name: 'squats',
              sets: 5,
              reps: 15,
              weight: 180,
            }
          ]
        },
        {
            id: 0,
            name: 'Arm Day',
            exercises: [
              {
                name: 'Bicept Curls',
                sets: 5,
                reps: 15,
                weight: 40,
              }
            ]
          }
      ],
    }
    this.handleRoutinePress = this.handleRoutinePress.bind(this)
  }

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

  }

  handleRoutinePress(item){
    let { navigation } = this.props;
    navigation.navigate('RoutineView', {
      routine: item,
      title: item.name,
    });
  }

  render() {
    const { routines } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.RoutineScreenContainer}>
      {
        routines.length < 1
        ? <View style={styles.noRoutineContainer}>
            <View style={styles.noRoutineText}>
              <Text style={ {color: '#86D29A', fontSize: 15, fontWeight: 'bold'} }>You Currently Have no Routines!</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
              title="Add A new Workout!"
              color="#387B4A"
              onPress={() => navigation.navigate('AddRoutine', {
                title: 'Add a new Routine',
                type: 'Routine'
              })}
              />
            </View>
          </View>
        : <FlatList
            data={this.state.routines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const routine = item;
              let totalWeight = 0;
              routine.exercises.forEach(el => {
                totalWeight += (el.weight * el.sets * el.reps) ;
              })
              console.log()
              return (
                <View style={styles.routineListContainer}>
                  <TouchableOpacity onPress={() => this.handleRoutinePress(routine)}>
                    <View>
                      <Text style={{alignSelf:'center', fontWeight: 'bold', fontSize: 30}}>{ routine.name }</Text>
                      <View style={{height: .4, width: '40%', backgroundColor:'black', alignSelf:'center'}}/>
                    </View>
                    <View style={styles.routineStatistics}>
                      <Text style={styles.statText}>{`Total Exercises: ${routine.exercises.length}`}</Text>
                      <Text style={styles.statText}>{`Total Weight: ${totalWeight} lb.`}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RoutineScreenContainer:{
    backgroundColor: '#359E51',
    height: '100%'
  },
  noRoutineContainer:{
    alignItems: 'center',
    top: 70,
  },
  noRoutineText: {
    padding: 50,
    backgroundColor: '#387B4A',
    borderRadius: 15,
    marginBottom: 50,
  },
  buttonContainer: {
    backgroundColor: '#86D29A',
    padding: 20,
    borderRadius: 15,
  },
  routineListContainer: {
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#86D29A',
    borderRadius: 5,
    margin: 5,
    width: '90%'
  },
  routineStatistics: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statText: {
    marginTop: 10
  }
})
