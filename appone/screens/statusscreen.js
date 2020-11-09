import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import TopHeader from '../components/header';

function StatusScreen() {
    return (
        <View>
            <TopHeader />
            <Card style = {styles.cardStyle}>
               <Card.Content>
              
               <MaterialCommunityIcons name="lightbulb-on-outline" size={64} color="black" />
               <Title>Lights</Title>
               <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
            <Card style = {styles.cardStyle}>
               <Card.Content>
               <MaterialCommunityIcons name="speedometer-slow" size={64} color="black" />
               <Title>Dimmers</Title>
               <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>

            <View>
            <Card style = {styles.cardStyle}>
               <Card.Content>
               <FontAwesome name="thermometer-3" size={64} color="black" />
               <Title>Temperature</Title>
               <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
            <Card style = {styles.cardStyle}>
               <Card.Content>
               <MaterialCommunityIcons name="door-closed" size={64} color="black" />
               <Title>Door Lock</Title>
               <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
       
       
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