import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default exerciseList = (props) => {
  const { item } = props;
  return (
    <View style={styles.exerciseListContainer}>
      <View style={styles.exerciseName}>
        <Text style={{ fontWeight:'bold', fontSize: 25 }}> {item.name} </Text>
        <View style={{ height: .4, width: '90%', backgroundColor: 'black', alignSelf: 'center' }} />
      </View>
      <View style={styles.details}>
        <Text>{`Reps: ${item.reps} `}</Text>
        <Text>{`Sets: ${item.sets} `}</Text>
        <Text>{`Weigh: ${item.weight} `}</Text>        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseListContainer: {
    padding: 20,
    width: '100%',
    backgroundColor: '#437313',
    borderRadius: 10,
    marginBottom: 20,
  },
  exerciseName: {
    alignSelf: 'center'
  },
  details: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
