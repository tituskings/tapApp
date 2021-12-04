import React,{useEffect} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Game from './src/screens/Game';
import Result from './src/screens/Result';
import SplashScreen from 'react-native-splash-screen';


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Result" component={Result}  options={{ headerShown:false}}/>
          <Stack.Screen name="Game" component={Game}  options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1, 
},
})

export default App;