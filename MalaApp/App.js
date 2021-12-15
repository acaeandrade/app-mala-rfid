import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, ImageBackground, Image, SafeAreaView, Modal } from 'react-native';

import Cadastre from './src/Components/Cadastro/Cadastro.js';
import Login from './src/Components/Login/Login.js';
import Bottom from './Bottom.js';
import Interface from './src/Components/UserScreen/Interface.js';
import Stater from './src/Components/Login/Login.js';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const backuri = require('./assets/splash.png');

export default function App({navigation}){
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserPlace"  component={Interface} />
        <Stack.Screen name="Cadastre" component={Cadastre} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}


function HomeScreen({navigation}) {

  const [usern, onChangeUser] = React.useState(usern);
    let [passw, onChangePass] = React.useState(passw);
    const ent = {entuser: null, passent: null};
    const [CadastroAberto, setCadastroCloser] = React.useState(false);
    const [stater, setStater] = React.useState(false);

  return (
  
      <View style={styles.main}>
        
          <ImageBackground source={backuri} resizeMode='cover' style={styles.back_image}>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around',flexDirection: 'column'}}>

              <View style={{ alignContent: 'center' }}>
                <Image source={require("./assets/dag-icon.png")} style={styles.image} resizeMode='repeat' />
              </View>
              <View style={styles.heade} >
                {/* Initial code of Login frame */}
                    <View style={stylesLog.main}>
                    <SafeAreaView>
                        <TextInput
                            style={stylesLog.input}
                            onChangeText={onChangeUser}
                            value={usern}
                            placeholder="User"
                            autoComplete='password'   
                        />
                        <TextInput
                            style={stylesLog.input}
                            onChangeText={onChangePass}
                            value={passw}
                            placeholder="Senha"     
                        />
                    </SafeAreaView>
                      <View style={stylesLog.padd} >

                          <Button 
                              title="Login"
                              style={stylesLog.butt}
                              onPress={() => { 
                                      ent.entuser = usern;
                                      ent.passent = passw;
                                      console.log(ent);
                                      setStater(true);
                                      navigation.push('UserPlace');
                                      //sendData(ent);
                                      
                                      // async () => {
                                      
                                      //     const requester = await fetch('https://10.0.2.2:5000/users')
                                      //     const item = await requester.json();
                                      //     console.log(item);
                                      
                                      // }
                                  }
                              }
                          />
                          
                          <Button 
                              title="Cadastre-se" 
                              style={stylesLog.butt}
                              onPress={
                                      () => {
                                          console.log('abrindo cadastro!');
                                          //setCadastroCloser(true);
                                          navigation.navigate('Cadastre');
                                      }   
                              }
                          />
                    
                      </View>

                      <View style={stylesLog.mod}>
                          <Modal 
                                animationType="fade"
                                transparent={true}
                                visible={CadastroAberto}
                                onRequestClose={() => {
                                        console.log('Formulário Fechado!');
                                        setCadastroCloser(!CadastroAberto);   
                                    }
                                }
                              >
                            <Cadastre />
                          </Modal>    
                      </View>

                  </View>
                {/* Final code of Login frame */}
                
              </View>

              <View style={styles.bottom}>
                <Bottom />
              </View>
              
              <StatusBar style="auto" />

            </View>
          
          </ImageBackground>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  
  back_image: {
    
    justifyContent: 'center',
    //backgroundColor: '#000',//cor de visualização de background
    flex: 1,
    
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  main: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  heade: {
    top:-100,
    flex: 0,
    width: '80%',
    height: 250,
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  bottom: {
    flex: 0,
    bottom: -50,
    shadowRadius: 10,
    shadowColor: 'black',
    width: '100%',
  }
});

const stylesLog = StyleSheet.create({

  main: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: '#293C42c0',//'#fffafaa0',
      borderRadius: 15,
      shadowOffset: {
          width: 0,
          height: -10
      },
      shadowRadius: 10,
      shadowOpacity: 5,
      shadowColor: '#3f3f3f',
      padding: 10,
      width: '90%',
      height: '100%',
  },
  input: {
      borderRadius:15,
      backgroundColor: '#f5f5f5',
      height: 40,
      padding: 5,
      //borderWidth: 1,
      margin: 10,        
  },
  butt: {
      margin: 5,
      borderRadius: 5,
  },
  padd: {
      justifyContent: 'space-between',
      padding: 5,
  },
  mod: {
      display: 'none',
      flex:-1,
      height: 200,
      width: 100,
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      backgroundColor: 'red',
  }
});
