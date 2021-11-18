import React, { useState } from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Interface() {
    const [show, setShower] = React.useState();
    
    return(
        <View style={styles.main}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#3f3f3f'
    },
});