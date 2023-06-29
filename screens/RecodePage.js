import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

function IntroPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/recordscreen.png')}
        style={styles.backgroundImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default IntroPage;