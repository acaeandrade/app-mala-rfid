import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';

export default function Cadastre () {
    return(
        <View style={cadastrestyle.main}>
            <TextInput autoComplete='password' />
            <Button title='Enviar'/>

        </View>
    )
}

const cadastrestyle = StyleSheet.create({
    main: {
        flex:0,
        height: 200,
        width: 100,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        backgroundColor: 'red',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
    }
});