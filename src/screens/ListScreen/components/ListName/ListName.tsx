import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SIZES} from '../../../../constants';

interface Props {
  name: string;
  id: string;
  onPress: (id: string) => void;
}

export const ListName: FC<Props> = ({name, onPress, id}) => (
  <TouchableOpacity
    style={styles.listName}
    onPress={() => {
      onPress(id);
    }}>
    <Text>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listName: {
    padding: SIZES.GUTTER,
    marginHorizontal: SIZES.GUTTER / 2,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
  },
});
