import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.GUTTER,
  },
  mainList: {
    height: '100%',
  },
  secondList: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});
