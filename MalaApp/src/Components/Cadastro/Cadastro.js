import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, View, ImageBackground } from 'react-native';

const backuri = require('../../../assets/splash.png');
export default function Cadastre () {
    return(
        <View style={cadastrestyle.main}>
            <ImageBackground source={backuri} resizeMode='cover' style={cadastrestyle.back_image}>
                <View style={cadastrestyle.main_view} >

                </View>
            </ImageBackground>
        </View>
    )
}

const cadastrestyle = StyleSheet.create({
    main: {
        backgroundColor: '#3f3f3f',

    },
    back_image: {
        justifyContent: 'center',
        //backgroundColor: '#000',//cor de visualização de background
        //flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_view: {
        width: '90%',
        height: '70%',
        backgroundColor: '#293C42c0',
        borderRadius: 10,
        
    }
});