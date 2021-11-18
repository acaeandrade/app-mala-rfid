import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import Login from './components/Login/login.js';
import Bottom from './bottom.js';


export default function App() {


  return (
      <View style={styles.main}>
        
        <View style={styles.heade} >
          <Login style={{
            shadowColor: '#000',
          }} />
        </View>

        <View style={styles.bottom}>
            <Bottom />
        </View>
               
        <StatusBar style="auto" />
      
      </View>
    //</ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-start",
    width: '100%',
    height: '70%',
  },
  main: {
    flex: 1,
    backgroundColor: '#009ceb',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heade: {
    width: '80%',

  },
  bottom: {
    bottom: -130,
    shadowRadius: 10,
    shadowColor: 'black',
    width: '100%',
  },
});
