import React from 'react';
import {StyleSheet, View } from 'react-native';
import TopHeader from '../components/header';
import MotorControlBox from '../components/mcBox';

function MotorControls(props) {
    return (
        <View style = {styles.bg}>
            <TopHeader heading = "Motor Controlling"/>
            <MotorControlBox />
        </View>
    );
}

const  styles =  StyleSheet.create({
    bg: {
        backgroundColor: '#edf5ff'
    }
})
export default MotorControls;