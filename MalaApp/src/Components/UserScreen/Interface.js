import React, { useState } from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const backuri = require('../../../assets/splash.png');

export default function Interface() {
    const [show, setShower] = React.useState();
    
    
    return(
        <View style={styles.main}>
            <ImageBackground source={backuri} resizeMode='cover' style={styles.back_image}>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#3f3f3f'
    },
    back_image: {
    
        justifyContent: 'center',
        //backgroundColor: '#000',//cor de visualização de background
        //flex: 1,
        width: "100%",
        height: "100%",
    },
});