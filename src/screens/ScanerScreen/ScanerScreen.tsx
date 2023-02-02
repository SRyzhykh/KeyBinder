import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {styles} from './ScanerScreen.styles';

export const ScanerScreen = () => {
  const onSuccess = e => {
    console.log('SCANNED: ', e.data);
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
