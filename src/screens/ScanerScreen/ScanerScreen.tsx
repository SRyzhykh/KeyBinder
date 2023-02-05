import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getKeysList} from '../../helpers';
import {styles} from './ScanerScreen.styles';
import {SCREENS} from '../../constants';
import {StackParamsList} from '../../navigation/MainNavigator/MainStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

export const ScanerScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();

  const onSuccess = async e => {
    const data = await getKeysList(e.data);
    console.log('data: ', data.data);
    navigation.navigate(SCREENS.LIST, {data: data.data, lists: data.lists, ip: e.data});
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      }
    />
  );
};
