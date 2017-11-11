import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export const AddButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name='md-add' size={30} style={{ right: 20 }} color='black' />
    </TouchableOpacity>
  )
};
