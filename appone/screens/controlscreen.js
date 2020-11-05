import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card, Button,Title,Paragraph  } from 'react-native-paper';
import TopHeader from '../components/header';


function ControlScreen() {
    return (
         <View style = {styles.mybg} >
             <TopHeader heading = "Room Controls"/>
             <View style = {styles.container}>
                 <View style={styles.tile}></View>
                 <View style={styles.tile}></View>
                 <View style={styles.tile}></View>
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}></View>
                 <View style={styles.tile}></View>
                 <View style={styles.tile}></View>
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}></View>
                
             </View>
             
         </View>
    );
}

const styles = StyleSheet.create({
    mybg: {
        backgroundColor: '#dfe5f0',
        flex : 1,
    },
    container: {
        flex: 0.3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'space-evenly',
      

        
    },
    tile: {
        height: '65%',
        width:'30%',
        backgroundColor:'lightblue',
        marginTop: '5%'

    }
});

export default ControlScreen; 