import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from '../screens/loginscreen'
import RegistrationForm from "../screens/signup";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="SignUp" component={RegistrationForm} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;