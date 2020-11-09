import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button  } from 'react-native';
import ControlScreen from './screens/controlscreen';
import LoginForm from './screens/loginscreen'
import MotorControls from './screens/motorcontrollingscreen';
import Products from './screens/productsscreen';
import Rooms from './screens/roomsscreen';
import Rough from './screens/rough';
import RegistrationForm from './screens/signup'
import StatusScreen from "./screens/statusscreen";
import MyComponent from "./screens/bottomnavigaion";
// navigation work
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
  //  // <View Style = {styles.container}>
    //  <LoginForm />
   //  <RegistrationForm />
      //  <StatusScreen />
      // <Products />
      // <Rooms />
      // <Rough />
     // <ControlScreen />
    //  <MotorControls />
    // <MyComponent />
  //  // </View>

  // screen start navigation work 
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
       screenOptions={{  headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SignUp" component={RegistrationForm} />
      </Stack.Navigator>
    </NavigationContainer>
  // Ends 
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#242945',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
