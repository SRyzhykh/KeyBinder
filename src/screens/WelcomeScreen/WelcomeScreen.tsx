import React from 'react';
import {View, Button} from 'react-native';
import {fetchData} from '../../helpers';
import {styles} from './WelcomeScreen.styles';

export const WelcomeScreen = () => {
  const onPress = () => {
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Button title={'start'} onPress={onPress} />
    </View>
  );
};
