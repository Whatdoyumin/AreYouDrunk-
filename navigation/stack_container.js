import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import main from './screens/main';
import screen_2 from './screens/screen_2';

const main_screen = 'main';
const screen2 = ' screen_2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={main_screen} component={main} options={{}} />
      <Stack.Screen name={screen2} component={screen_2} options={{}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
