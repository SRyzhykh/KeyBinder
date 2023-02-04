import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getKeysList} from '../../helpers';
import {styles} from './ScanerScreen.styles';
import {SCREENS} from '../../constants';
import {RootStackParamList} from '../../navigation/MainNavigator/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const ScanerScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSuccess = e => {
    const data = getKeysList(e.data);
    navigation.navigate(SCREENS.LIST, {data});
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
