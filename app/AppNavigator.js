import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CategoryScreen from './screens/CategoryScreen';
import Login from './screens/Login';

const Drawar = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawar.Navigator initialRouteName='Home'>
        <Drawar.Screen name='Home' component={HomeScreen}/>
        <Drawar.Screen name='Books' component={BookScreen}/>         
        <Drawar.Screen name='Category' component={CategoryScreen}/>         
        <Drawar.Screen name='Login' component={Login}/>         
    </Drawar.Navigator>
  )
}

export default AppNavigator