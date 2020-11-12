import React from 'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Rooms from "../screens/roomsscreen";

function TouchableCards(props,{ navigation }) {
    return (
        <TouchableOpacity style = {styles.cardStyle} onPress={() => navigation.push('Rooms')}>
             <Card style = {{backgroundColor: '#d4aa04'}}>
             <Card.Content>
             <MaterialCommunityIcons name={props.name} size={32} color="black" />
             <Title>{props.title}</Title>
             <Paragraph>Card content</Paragraph>
             </Card.Content>
             </Card>
        </TouchableOpacity>   
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
      
       
    },
    cardStyle: {
        
        width: '30%',
        backgroundColor:'#d4aa04',
        // flexDirection: 'row',
        margin: '1.6%',
       
    }

}
)

export default TouchableCards;