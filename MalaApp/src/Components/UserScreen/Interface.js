import React, { useState } from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import axios from 'axios';

const backuri = require('../../../assets/splash.png');

export default function Interface() {
    //const [show, setShower] = React.useState();
    
    
    
    return(
        <View style={styles.main}>
            <ImageBackground source={backuri} resizeMode='cover' style={styles.back_image}>
                <View style={styles.main_view} >
                    <View style={styles.block_1}>

                    </View>
                    <View style={styles.block_1}>

                    </View>
                    <View style={styles.block_1}>
                        
                    </View>

                </View>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_view: {
        width: '90%',
        height: '70%',
        backgroundColor: '#293C42c0',
        borderRadius: 10,
        
    },
    block_1: {
        flexDirection:'column',
        justifyContent:'space-around',
    },
});