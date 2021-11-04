import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({ headerShown: false})}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}