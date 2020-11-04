import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

function Tile(props) {
    return (
    <Card style = {styles.cardStyle}>
    <Card.Content>
    <MaterialCommunityIcons name={props.name} size={64} color="black" />
    <Title>{props.title}</Title>
    <Paragraph>Card content</Paragraph>
    </Card.Content>
    </Card>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
      
       
    },
    cardStyle: {
        
        width: 150,
        backgroundColor:'#91b5ad',
        flexDirection: 'row',
        margin: '2%',
       
    }

}
)

export default Tile;