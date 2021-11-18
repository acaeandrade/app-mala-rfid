import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bottom() {
    return(
        <View style={styled.main}>
            <Text>Contato</Text>
            <Text>Feedback</Text>
            <Text>Desenvolvido por Acaê Andrade, Daniel Vicente e Giovanna Bernardino</Text>        
        </View>
    );
};

const styled = StyleSheet.create({
    main: {
        shadowColor:'#000',
        padding: 5,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#009ceb',
        width: '100%',
    }, 
});