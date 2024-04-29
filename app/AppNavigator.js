import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CategoryScreen from './screens/CategoryScreen';
import Login from './screens/Login';
import CategoryBookListScreen from './screens/CategoryBookListScreen';
import { TouchableOpacity } from 'react-native';
import Icon from './components/Icon';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20
          },
          headerStyle: {
              backgroundColor:'#60696b',
          },
          headerTintColor: '#fff',
          drawerStyle: {
              backgroundColor: '#000',
          },
          drawerActiveBackgroundColor:'#60696b',
          drawerContentStyle: {
              color: '#fff',
          },
          drawerItemStyle:{
              color:'#fff'
          },
          drawerLabelStyle: {
            color: '#fff'
          }
        }}
        initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen}
              options={{
                drawerIcon: () =>(
         
                  <TouchableOpacity>
                      <Icon
                          action = {() => props.handleHideModal()} 
                          name='home'
                          color='#fff'
                          size={20}
                          />
                  </TouchableOpacity>
                ),
                drawerLabelStyle:{
                  color: '#fff',
                  alignSelf:'auto'
                }
              }}
          />
          <Drawer.Screen name='Books' component={BookScreen}
            options={{
                drawerIcon: () =>(
                  <TouchableOpacity>
                      <Icon
                          action = {() => props.handleHideModal()} 
                          name='book-open'
                          color='#fff'
                          size={20}
                          />
                  </TouchableOpacity>
                ),
                drawerLabelStyle:{
                  color: '#fff',
                  alignSelf:'auto'
                }
              }}

          />         
                
          <Drawer.Screen name='Category' component={CategoryScreen}
            options={{
                drawerIcon: () =>(
                  <TouchableOpacity>
                      <Icon
                          action = {() => props.handleHideModal()} 
                          name='list-alt'
                          color='#fff'
                          size={20}
                          />
                  </TouchableOpacity>
                ),
                drawerLabelStyle:{
                  color: '#fff',
                  alignSelf:'auto'
                }
              }}

          />         
                
          <Drawer.Screen  name='Login' component={Login}
            options={{
                drawerIcon: () =>(
                  <TouchableOpacity>
                      <Icon
                          action = {() => props.handleHideModal()} 
                          name='user-plus'
                          color='#fff'
                          size={20}
                          />
                  </TouchableOpacity>
                ),
                drawerLabelStyle:{
                  color: '#fff',
                  alignSelf:'auto'
                }
              }}

          />         
                
          <Drawer.Screen
            name='Category Books' component={CategoryBookListScreen}
              options={{
              drawerItemStyle: {display: 'none' }
            }}
          />         
    </Drawer.Navigator>
  )
}

export default AppNavigator