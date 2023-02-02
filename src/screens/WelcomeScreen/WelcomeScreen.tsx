import React from 'react';
import {View, Button} from 'react-native';
import {getKeysList} from '../../helpers';
import {styles} from './WelcomeScreen.styles';
// import {useNavigation} from '@react-navigation/native';

export const WelcomeScreen = () => {
  // const navigation = useNavigation();
  const onPress = async () => {
    await getKeysList();
    // navigation.navigate();
  };

  return (
    <View style={styles.container}>
      <Button title={'start'} onPress={onPress} />
    </View>
  );
};
