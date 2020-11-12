import React from "react";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";

import StatusScreen from "./screens/statusscreen";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StatusScreen} options={{ title: 'HumanTek' , headerStyle: {
            backgroundColor: '#242945',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}} />
      </Stack.Navigator>
    );
  }

export {HomeStackNavigator};