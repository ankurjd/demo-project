import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/scalingUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  htmlStyle: {
    width: DEVICE_WIDTH,
  },
});

export default styles;
