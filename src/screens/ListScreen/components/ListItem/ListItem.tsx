import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {SIZES} from '../../../../constants';

interface Props {
  name: string;
  text: string;
}

export const ListItem: FC<Props> = ({name, text}) => {
  const onPress = () => {
    console.log(`Item ${name} pressed`);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: SIZES.GUTTER,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
