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
    <View>
      <Text> {item.exerciseName} </Text>
    </View>
  )
}

const styles = StyleSheet.create({

});
