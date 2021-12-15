import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bottom() {
    return(
        <View style={styled.main}>
            <Text style={{ color: '#fffafaa0', fontStyle: 'italic'}}>Contato</Text>
            <Text style={{ color: '#fffafaa0', fontStyle: 'italic'}}>Feedback</Text>
            <Text style={{ color: '#fffafaa0', fontStyle: 'italic'}}>Acaê Andrade, Daniel Vicente e Giovanna Bernardino</Text>        
        </View>
    );
};

const styled = StyleSheet.create({
    main: {
        shadowColor:'#000',
        padding: 5,
        alignItems:'center',
        backgroundColor: '#00000070',
        width: '100%',
    }, 
});