import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Game from './screens/Game';
import Home from './screens/Home';
import Splash from './screens/Splash';

const App = () => {
  return (
    <View style={styles.container}>
      <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1, 
},
})

export default App;