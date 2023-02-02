import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainStackNavigator} from './src/navigation/MainNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MainStackNavigator />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
