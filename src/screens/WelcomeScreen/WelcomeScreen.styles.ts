import {StyleSheet} from 'react-native/types';
import {SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: SIZES.GUTTER * 2,
    borderRadius: 20,
  },
});
