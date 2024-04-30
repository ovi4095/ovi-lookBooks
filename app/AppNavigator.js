import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CategoryScreen from './screens/CategoryScreen';
import Login from './screens/Login';
import CategoryBookListScreen from './screens/CategoryBookListScreen';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from './components/Icon';
import { connect } from 'react-redux';
import { logOut } from './redux/authActionCreator';
import { navigate } from './NavigationRoot';


const mapStateToProps = state => {
  return{
    isAuth: state.isAuth
  }
}

const mapDispatchTOProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

const Drawer = createDrawerNavigator();



const AppNavigator = (props) => {

  const authentication = props.isAuth === false?(
    <Drawer.Screen  name='Login' component={Login}
              options={{
                  drawerIcon: () =>(
                        <Icon 
                            name='user-plus'
                            color='#fff'
                            size={20}
                            />
                  ),
                  drawerLabelStyle:{
                    color: '#fff',
                    alignSelf:'auto'
                  }
                }}
  
            />
  ):(
    <Drawer.Screen  name='Log out' component={HomeScreen}
              options={{
                  drawerLabel:'',
                  drawerIcon: () =>(
                    <TouchableOpacity 
                      style={{
                        alignItems:'flex-start',
                        marginRight:2
                      }}
                      onPress={() =>{
                        navigate('Home');
                        props.logOut();
                      }}
                    >
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'flex-start', alignItems:"flex-start"}}>
                            <View>
                              <Icon 
                                  name='sign-out-alt'
                                  color='#fff'
                                  size={20}
                                  />
                            </View>
                            <View>
                              <Text style={{
                                color: '#fff',
                                marginLeft: 33,
                                fontWeight: '600'
                              }}>
                                Log out
                              </Text>
                          </View>
                        </View>
                    </TouchableOpacity>
                  ),
                  drawerLabelStyle:{
                    color: '#fff',
                    alignSelf:'auto'
                  }
                }}
  
            />
  );

  return (
    <Drawer.Navigator
        screenOptions={{
          headerTitleAlign:'center',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            alignSelf:'center'
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
                headerTitle:'LookBooks',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
                drawerIcon: () =>(
        
                      <Icon
                          name='home'
                          color='#fff'
                          size={20}
                          />
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
                      <Icon
                          name='book-open'
                          color='#fff'
                          size={20}
                          />
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
                      <Icon
                          name='list-alt'
                          color='#fff'
                          size={20}
                          />
                ),
                drawerLabelStyle:{
                  color: '#fff',
                  alignSelf:'auto'
                }
              }}

          />         
          {authentication}  
          <Drawer.Screen
            name='Category Books' component={CategoryBookListScreen}
              options={{
              drawerItemStyle: {display: 'none' }
            }}
          />         
    </Drawer.Navigator>
  )
}

export default connect(mapStateToProps,mapDispatchTOProps)(AppNavigator)