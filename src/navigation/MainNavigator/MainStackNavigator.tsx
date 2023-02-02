import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../../constants';
import {ScanerScreen, WelcomeScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.SCANNER} component={ScanerScreen} />
      <Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
