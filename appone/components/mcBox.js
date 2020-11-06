import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


function MotorControlBox(props) {
    return (
        
      <View style = {styles.box}>
        <Card>
        <Card.Content>
        <Title>Ground Tank</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
      {/* <Card>
        <Card.Content>
        <Title>Overhead Tank</Title>
        <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card> */}
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 10
    }
})

export default MotorControlBox;