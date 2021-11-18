import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Text } from 'react-native';

function call(eventologin) {

    return console.log(eventologin);
}


export default function Login(){
    
    const [usern, onChangeUser] = React.useState(usern);
    let [passw, onChangePass] = React.useState(passw);
    //const [eventologin, setEventoLogin] = React.useState({usern, passw});
    const ent = {entuser: null, passent: null};
    return(

        <View style={styles.main}>
            <Text>{usern}</Text>
            <Text> {passw}</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUser}
                    value={usern}
                    placeholder="Usuário"
                    
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangePass}
                    value={passw}
                    placeholder="Senha"
        
                    
                />
            </SafeAreaView>
            <View style={styles.padd} >

                <Button 
                    title="Login"
                    style={styles.butt}
                    //onPress={() => setEventoLogin }
                    onPress={() => { 
                        ent.entuser = usern;
                        ent.passent = passw;
                    }}
                />
                
                <Button 
                    title="Cadastre-se" 
                    style={styles.butt}
                    onPress={() => console.log(ent)}
                />

                {/* botão de teste -------*/}
                    <Button title="TESTE" style={styles.butt} onPress={() => console.log({ent})} />
                {/* -------botão de teste */}            
            </View>
                    
        </View>
    );
};


const styles = StyleSheet.create({

    main: {
        justifyContent: 'space-between',
        backgroundColor: '#fffafa',
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: -10
        },
        shadowRadius: 10,
        shadowOpacity: 5,
        shadowColor: '#3f3f3f',
        padding: 20,
    },
    input: {
        height: 40,
        padding: 5,
        borderWidth: 1,
        margin: 10,        
    },
    butt: {
        margin: 5,
        borderRadius: 5,
    },
    padd: {
        justifyContent: 'space-between',
        padding: 5,
    }
});