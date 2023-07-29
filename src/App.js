import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import About from './screens/About';
import Keranjang from './screens/Keranjang';
import Kategori from './screens/Kategori';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='About' component={About} />
      <Tab.Screen name='Keranjang' component={Keranjang} />
      <Tab.Screen name='Kategori' component={Kategori} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Utama' component={Tabs} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Keranjang' component={Keranjang} />
        <Stack.Screen name='Kategori' component={Kategori} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App