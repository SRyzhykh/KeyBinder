import React from 'react';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../../constants';
import {ListScreen, ScanerScreen} from '../../screens';

const Stack = createStackNavigator<StackParamsList>();

export type StackParamsList = {
  [SCREENS.LIST]: {data: object[]; lists: string[]; ip: string} | undefined;
  [SCREENS.SCANNER]: undefined;
};

export type ScreenProps = StackScreenProps<StackParamsList, SCREENS.LIST, SCREENS.SCANNER>;

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.SCANNER} component={ScanerScreen} />
      <Stack.Screen
        options={{
          headerLeft: () => null,
        }}
        name={SCREENS.LIST}
        component={ListScreen}
      />
    </Stack.Navigator>
  );
};
