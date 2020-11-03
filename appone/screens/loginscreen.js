import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button  } from 'react-native';

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>LOGIN</Text>
      <View style = {styles.innercontainer}>
      <TextInput style = {styles.txtBox}  value = "Email"/>
      <TextInput style = {styles.txtBox}  value = "Password" />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
      </View>
      <Text style = {styles.signupDire} >Not a member ?
        <TouchableOpacity>
        <Text style = {styles.tot}> Register Here</Text>
        </TouchableOpacity>
      </Text>
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
  heading: {
    color:'white',
    // fontWeight: 'bold',
    fontSize: 40,
    fontFamily:'Roboto',
    marginBottom: 100
  },
  innercontainer: {
   width:'80%',
   height:'40%',
   backgroundColor: 'white',
   borderWidth: 5,
   borderColor: 'lightgrey',
   borderRadius: 10,
   borderBottomWidth:15,
   
  },
  signupDire:{
    color: 'white',
    marginTop: 10
  },
  tot:{
    color: 'orange'
  },
  txtBox:{
     height: 40,
     borderColor: '#242945',
     borderWidth: 2 ,
     borderRadius: 3,
     margin: '5%',
    backgroundColor: '#242945',
    color: 'white',
    textAlign: 'center'
  },
  appButtonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer: {
    margin: '5%',
    width:'90%',
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  
});
