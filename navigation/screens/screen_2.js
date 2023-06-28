import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BackgroundImage from '../../assets/screen_2.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // 배경 이미지를 커버할 수 있도록 설정
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
