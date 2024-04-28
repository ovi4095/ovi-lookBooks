import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CategoryScreen from './screens/CategoryScreen';
import Login from './screens/Login';

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Books' component={BookScreen}/>         
        <Drawer.Screen name='Category' component={CategoryScreen}/>         
        <Drawer.Screen name='Login' component={Login}/>         
    </Drawer.Navigator>
  )
}

export default AppNavigator