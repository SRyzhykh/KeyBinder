import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../../constants';
import {ListScreen, ScanerScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ListScreen: {data: object[]};
  ScanerScreen: undefined;
};

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.SCANNER} component={ScanerScreen} />
      <Stack.Screen name={SCREENS.LIST} component={ListScreen} />
    </Stack.Navigator>
  );
};
