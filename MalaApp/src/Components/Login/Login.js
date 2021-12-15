import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Modal} from 'react-native';
import Cadastre from '../Cadastro/Cadastro.js';


const sendData = async (ent) => {
    await fetch('http://10.0.2.2:5000/users', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue'
          })
    });
}

export function Stater() {
    const [stater, setStater] = React.useState(false);
    

    return (
        setStater(true)
        
    );
}

export default function Login({stater}){
    
    const [usern, onChangeUser] = React.useState(usern);
    let [passw, onChangePass] = React.useState(passw);
    const ent = {entuser: null, passent: null};
    const [CadastroAberto, setCadastroCloser] = React.useState(false);

    return(

        <View style={stylesLog.main}>
            <SafeAreaView>
                <TextInput
                    style={stylesLog.input}
                    onChangeText={onChangeUser}
                    value={usern}
                    placeholder="UserPlace"   
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
                            Stater();
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
                                setCadastroCloser(true);
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

        
    );
};


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