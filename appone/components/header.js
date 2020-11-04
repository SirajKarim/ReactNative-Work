import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,Text } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';

function TopHeader(props) {
    return (
        <Appbar.Header style = {styles.background} >
            {/* the subtitle heading will pass in props */}
          <Appbar.Content title="HumanTek"  subtitle = {props.heading}/>   
         </Appbar.Header>
    );
}


const styles = StyleSheet.create({
    background: {
         backgroundColor: '#242945',
        
    },
})

export default TopHeader;