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
// import IntroPage from
// inport RecodePage from

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <StatusBar style="auto" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroPage')}
        >
          <Text style={styles.buttonText}>게임 설명</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('RecodePage')}
        >
          <Text style={styles.buttonText}>전적보기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('GameStart')}
        ></TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => navigation.navigate('Makedrink')}
        >
          <Text style={styles.buttonText}>폭탄주 제조</Text>
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
  
  button2: {
    position: 'absolute',
    top: 470,
    right: -8,
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  button3: {
    position: 'absolute',
    top: 450,
    left: 50,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  button4: {
    position: 'absolute',
    top: 570,
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

function RecodePage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> 전적 보기 </Text>
    </View>
  );
}

function GameStart() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> game start </Text>
    </View>
  );
}

function Makedrink() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> make drink </Text>
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
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="RecodePage" component={RecodePage} />
        <Stack.Screen name="GameStart" component={GameStart} />
        <Stack.Screen name="Makedrink" component={Makedrink} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
