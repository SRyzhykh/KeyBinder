import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {getKeysList} from '../../helpers';
import {styles} from './ScanerScreen.styles';

export const ScanerScreen = () => {
  const navigation = useNavigation();
  const onSuccess = e => {
    getKeysList(e.data);
    // navigation.navigate
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
