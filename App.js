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

import {StartGameScreen} from './Guess-Number-Game-React-Native-Practice/screens/StartGameScreen'
import { Dimensions } from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     left: screenWidth * 0.3, // 화면 너비의 30% 위치에 설정
//     top: screenHeight * 0.4, // 화면 높이의 40% 위치에 설정
//   },
// });


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
          >
          <Text style={styles.buttonText3}>도전?</Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => navigation.navigate('Makedrink')}
        >
          <Text style={styles.buttonText1}>폭탄주 제조</Text>
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
    left: screenWidth * 0.64, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.573, // 화면 높이의 40% 위치에 설정
    padding:10,
    paddingBottom: 15,
    paddingTop: 15,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:"#FADAA2",
  },
  
  button2: {
    position: 'absolute',
    left: screenWidth * 0.65, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.723, // 화면 높이의 40% 위치에 설정
    padding:10,
    paddingBottom: 15,
    paddingTop: 15,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:"#F37979",
  },

  button3: {
    position: 'absolute',
    left: screenWidth * 0.15, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.7, // 화면 높이의 40% 위치에 설정
    padding:20,
    paddingBottom: 15,
    paddingTop: 15,

    // width: 150,
    // height: 150,
    transform: [{ rotate: '13deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:"white",
  },

  button4: {
    position: 'absolute',
    left: screenWidth * 0.64, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.87, // 화면 높이의 40% 위치에 설정
    padding:5,
    paddingBottom: 13,
    paddingTop: 13,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor:"#FADAA2",
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },

  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },

  buttonText3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
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
      <StartGameScreen>game</StartGameScreen>
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

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Button } from 'react-native';
// import React from 'react';

// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";


// const Stack = createStackNavigator();

// import BackgroundImage from './assets/main_screen.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요

// function Home({navigation}) {
//   return (
//     <TouchableOpacity style={{flex : 1}} onPress={() =>
//       navigation.navigate('introPage')}>
//         <View style={styles.container}>
//           <ImageBackground
//             source={BackgroundImage}
//             style={styles.backgroundImage}
//           ></ImageBackground>
//           <StatusBar style="auto" />

//           <Button
//             title="게임 설명"
//             onPress={() => navigation.navigate('introPage')}>
//           </Button>

//         </View>
//       </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // 배경 이미지를 커버할 수 있도록 설정
//     width: '100%',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// function IntroPage(){
//   return (
//     <View style={{ flex: 1, alignItems: 'right', 
//     justifyContent: 'center'}}>
//       <Text>게임 설명 페이지다 ㅋ</Text>
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown:false}}
//         />
//         <Stack.Screen
//           name="introPage"
//           component={IntroPage}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// // import React from 'react';
// // import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

// // const BackgroundScreen = () => {
// //   const handleButtonPress = () => {
// //     // 버튼을 눌렀을 때 실행할 작업을 정의합니다.
// //     <recordscreen></recordscreen>
// //     console.log('버튼이 눌렸습니다.');
// //   };

// //   return (
// //     <ImageBackground
// //       source={require('./assets/main_screen.png')}
// //       style={styles.background}
// //     >
// //       <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
// //         <Text style={styles.buttonText}>버튼</Text>
// //       </TouchableOpacity>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //     justifyContent: 'center',
// //   },
// //   button: {
// //     backgroundColor: 'blue',
// //     paddingHorizontal: 20,
// //     paddingVertical: 10,
// //     borderRadius: 5,
// //     alignSelf: 'center',
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default BackgroundScreen;


// // // import { StatusBar } from 'expo-status-bar';
// // // import { StyleSheet, Text, View, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
// // // import React from 'react';

// // // //import * as React from 'react';

// // // import { NavigationContainer } from '@react-navigation/native';


// // // import BackgroundImage from './assets/main_screen.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요
// // // import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

// // // // export default function App() {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <ImageBackground
// // // //         source={BackgroundImage}
// // // //         style={styles.backgroundImage}
// // // //       ></ImageBackground>
// // // //       <View style={{flexDireection:'row', alignItems:'center',justifyContent:'space-between'}}>
// // // //       <StatusBar style="auto" />
// // // //       <Button title="이것은 버튼"></Button>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // }
// // // export default function App(){
// // //   return(
// // //     <View style={styles.container}>
// // //       <StatusBar style="auto" />
// // //       <ImageBackground>
// // //       source={BackgroundImage}        
// // //       style={styles.backgroundImage}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity>
// // //         <Text style={styles.btnText}>work</Text>
// // //         </TouchableOpacity>
// // //         <Pressable>
// // //         <Text style={styles.btnText}>travel</Text>
// // //         </Pressable>  
// // //       </View>
// // //       </ImageBackground>
// // //     </View>
// // //   )
// // // }

// // // const styles=StyleSheet.create({
// // //   container:{
// // //     flex:1,
// // //     backgroundColor:"#000",
// // //     paddingHorizontal:20,
// // //   },
// // //   header:{
// // //     justifyContent:"space-between",
// // //     flexDirection:"row",
// // //     marginTop:100,
// // //   },
// // //   btnText:{
// // //     fontSize:44,
// // //     fontWeight:"600",
// // //     color:"white",
// // //   },
// // //   backgroundImage: {
// // //         flex: 1,
// // //         resizeMode: 'cover', // 배경 이미지를 커버할 수 있도록 설정
// // //         width: '100%',
// // //         height: '100%',
// // //         alignItems: 'center',
// // //        justifyContent: 'center',
// // //       },
// // // })

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   backgroundImage: {
// // // //     flex: 1,
// // // //     resizeMode: 'cover', // 배경 이미지를 커버할 수 있도록 설정
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //   },
// // // // });

