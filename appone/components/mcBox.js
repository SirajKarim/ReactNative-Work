import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, TextInput  } from 'react-native-paper';
import OutlinedInputBox from './InputBox';
import ToggleBtn from './toggleButton';


function MotorControlBox(props) {
    return (
        
      <View style = {styles.box}>
        <Card style = {{height: '40%', alignItems: "center", backgroundColor: '#deae4e'}}>
        <Card.Content>
        <Title style = {{textAlign: 'center'}} >Ground Tank</Title>
        </Card.Content>
        <ToggleBtn/>
        <OutlinedInputBox />
      </Card>
      <Card style = {{height: '40%', alignItems: "center", marginTop: 10 , backgroundColor: '#deae4e'}}>
        <Card.Content>
        <Title style = {{textAlign: 'center'}} >Overhead Tank</Title>
        </Card.Content>
        <ToggleBtn/>
        <OutlinedInputBox />
      </Card>
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
    }
})

export default MotorControlBox;