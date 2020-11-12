import React from 'react';
import { View,StyleSheet,SafeAreaView, ScrollView  } from 'react-native';
import { Card, Title, Paragraph, Button,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import TopHeader from '../components/header';
import StatusContainer from '../components/statuscontainer';
import ThreeTilesContainer from '../components/threetilecontainer';
import TwoTankTileContainer from '../components/twotanktiles';
import BigTile from '../components/bigtile';
import Rooms from "../screens/roomsscreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function StatusScreen({navigation}) {
   
    return (
        <ScrollView style = {styles.container}>
            {/* <TopHeader /> */}
            <StatusContainer title1 = "Lights" title2 = "Doors" title3 = "Gate"  name1 = "lightbulb-on-outline" name2 = "door-closed" name3 = "door" />   
            <TwoTankTileContainer />
            <BigTile title = "Temperature" name = "thermometer-half" />
            {/* below the name props means logo name   */}
            <ThreeTilesContainer title1 = "Rooms" title2 = "KeyFind" title3 = "Camera"  name1 = "bed-empty" name2 = "key" name3 = "camera-rear" />   
            <BigTile title = "Motor Controlling " />
            <ThreeTilesContainer title1 = "Motor    Control" title2 = "Curtin     Opener" title3 = "Generator Kit"  name1 = "bed-empty" name2 = "key" name3 = "power-plug" />   
           
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#f2f2ed'
       
    },
    cardStyle: {
        
        width: 150,
        backgroundColor:'#d4aa04',
        flexDirection: 'row',
        margin: '2%',
       
    }

}
)
export default StatusScreen;

