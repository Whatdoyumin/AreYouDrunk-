import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import React from 'react';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

import BackgroundImage from './assets/main_screen.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요

function Home({navigation}) {
  return (
    <TouchableOpacity style={{flex : 1}} onPress={() =>
      navigation.navigate('introPage')}>
        <View style={styles.container}>
          <ImageBackground
            source={BackgroundImage}
            style={styles.backgroundImage}
          ></ImageBackground>
          <StatusBar style="auto" />

          <Button
            onPress={() => navigation.navigate('introPage')}
            title="게임 설명">
          </Button>

        </View>
      </TouchableOpacity>
  );
}

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


function IntroPage(){
  return (
    <View style={{ flex: 1, alignItems: 'right', 
    justifyContent: 'center'}}>
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
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="introPage"
          component={IntroPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;