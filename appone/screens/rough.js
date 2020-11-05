import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';


function Rough() {
    return (
         <View style = {styles.mybg} >
            <View style = {{backgroundColor: 'dodgerblue', width: 100, height: 100, }}></View>
            <View style = {{backgroundColor: 'orange',  width: 100,height: 100}}></View>
            <View style = {{backgroundColor: 'gold',  width: 100, height: 100}}></View>
         </View>
    );
}

const styles = StyleSheet.create({
    mybg: {
        backgroundColor: 'grey',
        flex : 1,
        // flexDirection: 'row',
        flexDirection: 'row-reverse',  
    }
});

export default Rough; 