import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, TextInput  } from 'react-native-paper';
import OutlinedInputBox from './InputBox';
import ToggleBtn from './toggleButton';


function MotorControlBox(props) {
    return (
        
      <View style = {styles.box}>
        <Card style = {{height: '40%', alignItems: "center"}}>
        <Card.Content>
        <Title style = {{textAlign: 'center'}} >Ground Tank</Title>
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
        padding: 10,
    }
})

export default MotorControlBox;