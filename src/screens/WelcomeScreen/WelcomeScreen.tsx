import React from 'react';
import {View, Button} from 'react-native';
import {fetchData} from '../../helpers';
import {styles} from './WelcomeScreen.styles';
// import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen = () => {
  // const navigation = useNavigation();
  const onPress = () => {
    fetchData();
    // navigation.navigate();
  };

  return (
    <View style={styles.container}>
      <Button title={'start'} onPress={onPress} />
    </View>
  );
};
