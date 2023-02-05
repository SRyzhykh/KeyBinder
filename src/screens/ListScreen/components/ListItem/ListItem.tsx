import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {SIZES} from '../../../../constants';
import {fetchData} from '../../../../helpers';

interface Props {
  name: string;
  text: string;
  ip: string;
}

export const ListItem: FC<Props> = ({name, text, ip}) => {
  const onPress = () => {
    console.log(`Item ${name} pressed`);
    fetchData(ip, name);
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
