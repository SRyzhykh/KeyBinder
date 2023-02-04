import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SIZES} from '../../../../constants';

interface Props {
  name: string;
  onPress: () => void;
}

export const ListName: FC<Props> = ({name, onPress}) => (
  <TouchableOpacity style={styles.listName} onPress={onPress}>
    <Text>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listName: {
    padding: SIZES.GUTTER,
    borderRadius: 10,
  },
});
