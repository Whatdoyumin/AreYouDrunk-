import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import BackgroundImage from './assets/main_screen.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <StatusBar style="auto" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('introPage')}
        >
          <Text style={styles.buttonText}>게임 설명</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    top: 375,
    right: -8,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },
});

function IntroPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>게임 설명 페이지다 ㅋ</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="introPage" component={IntroPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
