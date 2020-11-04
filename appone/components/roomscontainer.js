import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,Text } from 'react-native';
import TopHeader from '../components/header';
import Tile from '../components/tile';

function RoomContainer(props) {
    return (
        <View>
         
            <Tile  title = "Living Room" name = "sofa"/>
            <Tile  title = "Kitchen" name = "toaster-oven"/>            
            <Tile  title = "Bed Room 1" name = "bed-empty"/>
            <Tile  title = "Bed Room 2" name = "bed-empty"/>
        </View>
    );
}



export default RoomContainer;