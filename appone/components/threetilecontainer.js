import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,Text } from 'react-native';
import SmallTile from '../components/smalltile';

function ThreeTilesContainer(props) {
    return (
        <View style = {styles.threetilecontainer}>       
            <SmallTile  title = {props.title1} name = {props.name1}/>
            <SmallTile  title = {props.title2} name =  {props.name2}/>            
            <SmallTile  title = {props.title3} name =  {props.name3}/>
        </View>
    );
}
const styles = StyleSheet.create({
    threetilecontainer: {
        flexWrap: "wrap",
      flexDirection: 'row'
       
    }
}
)


export default ThreeTilesContainer;