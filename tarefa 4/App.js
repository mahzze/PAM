import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './src/Home/index';
import Outra from './src/Outra/index';

export default function App()
{
 return(
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Outra' component={Outra} />
      </Stack.Navigator>   
  </NavigationContainer>
 );
}