import React from 'react';
import Products from './screens/productsscreen';
import StatusScreen from "./screens/statusscreen";
import EngineeringTools from "./screens/etoolsscreen";
import DeviceConfigScreen from "./screens/deviceconfigscreen";
import Cart from "./screens/cartscreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { HomeStackNavigator} from "./StackNavigator";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#242945' }}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    }} 
     />
     <Tab.Screen 
    name="Tools" 
    component={EngineeringTools} 
    options={{
      tabBarLabel: 'Tools',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="tools" color={color} size={26}  />
      ),
    }} 
    />
    <Tab.Screen 
    name="Products" 
    component={Products}
    options={{
      tabBarLabel: 'Products',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="store" size={26} color="white" />
      ),
    }} 
     />
    <Tab.Screen 
    name="Config" 
    component={DeviceConfigScreen} 
    options={{
      tabBarLabel: 'Config',
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="settings" size={30} color="white" />
      ),
    }} 
    />
    <Tab.Screen 
    name="Cart" 
    component={Cart}
    options={{
      tabBarLabel: 'Cart',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="shopping-cart" size={26} color="white" />
      ),
    }}  
    />
     </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;