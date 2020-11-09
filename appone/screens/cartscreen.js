import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import TopHeader from '../components/header';


function Cart(props) {
    return (
        <View style = {styles.bg}>
            <TopHeader />
            <Text>Cart</Text>
        </View>
    );
}

const  styles =  StyleSheet.create({
    bg: {
        flex: 1,
       // backgroundColor: '#edf5ff'
    }
})

export default Cart;