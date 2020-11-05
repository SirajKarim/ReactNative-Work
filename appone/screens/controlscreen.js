import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card, Button,Title,Paragraph  } from 'react-native-paper';
import TopHeader from '../components/header';
import SwitchBtn from '../components/switch';


function ControlScreen() {
    return (
         <View style = {styles.mybg} >
             <TopHeader heading = "Room Controls"/>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                     <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <SwitchBtn />
                 </View>
              
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <SwitchBtn />
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <SwitchBtn />
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 </View>
                 <View style={styles.tile}>
                
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.rgbtile}>
                 </View>
                
               
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
        flex: 0.185,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'space-evenly',
        // backgroundColor:'grey'
      

        
    },
    tile: {
        height: '80%',
        width:'45%',
        backgroundColor:'lightblue',
        justifyContent: 'center',
        marginTop: '4%'

    },
    rgbtile: {
        height: '100%',
        width:'92%',
        backgroundColor:'lightblue',
        justifyContent: 'center',
        marginTop: '4%'

    }
});

export default ControlScreen; 