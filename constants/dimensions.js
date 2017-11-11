import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
console.log(width, height, "from dimensions")
export default {
  window: {
    height,
    width
  }
}