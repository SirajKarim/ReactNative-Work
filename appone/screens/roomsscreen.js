import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,Text } from 'react-native';
import TopHeader from '../components/header';
import Tile from '../components/tile';
import RoomContainer from '../components/roomscontainer';

function Rooms(props) {
    return (
        <View style = {{backgroundColor: '#dfe5f0'}}>
            <TopHeader  heading = "Rooms"/>
            <RoomContainer />
        </View>
    );
}



export default Rooms;