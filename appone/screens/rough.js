import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';


function Rough() {
    return (
         <View style = {styles.background}></View>
    );
}

const styles = StyleSheet.create({
    background: {
         backgroundColor: '#242945',
        
    },
    card: {
         margin:25
    },
    btn: {
         backgroundColor: '#242945',
     
    }
}

);

export default Rough;