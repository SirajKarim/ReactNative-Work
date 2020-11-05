import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card, Button,Title,Paragraph  } from 'react-native-paper';
import TopHeader from '../components/header';
import SwitchBtn from '../components/switch';
import ValSlider from '../components/slider'
import Dimmer from '../components/dimmer';
import { MaterialIcons } from '@expo/vector-icons';

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
                 <View style = {styles.sldr}><Dimmer /></View>
                 </View>
                 <View style={styles.tile}>
                 <MaterialIcons name="add-box" size={44} color="black" style = {{alignItems: 'center'}}/>
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.rgbtile}>
                     <View style = {styles.sldr}><ValSlider  colour = "red"/></View>
                     <View style = {styles.sldr}><ValSlider  colour = "green"/></View>
                     <View style = {styles.sldr}><ValSlider colour = "blue"/></View>
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

    },
    sldr: {
       alignItems: 'center'

    },
});

export default ControlScreen; 