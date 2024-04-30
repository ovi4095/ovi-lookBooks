import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { tryAuth } from '../redux/authActionCreator'
import loginBackground from '../../assets/image/loginBG.png'

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
     tryAuth: (email, password, mode) => dispatch(tryAuth(email, password, mode))
  }
}

const Login = (props) => {
  const [authStates, setAuthStates] = useState({
    mode: 'login',
    inputs: {
      email: '',
      password:'',
      confirmPassword:'',
    }
})

const isFocused = useIsFocused();

useEffect(() => {
  setAuthStates({
    ...authStates,
    inputs: {
      email: '',
      password:'',
      confirmPassword:'',
    }
  })
},[isFocused])

const switchViews = () => {
  setAuthStates({
    ...authStates,
    mode: authStates.mode === 'login'? 'signup' : 'login',
    inputs: {
      email: '',
      password:'',
      confirmPassword:''
    }
  })
}

const updateInputs = (value, name) => {
  setAuthStates({
    ...authStates,
    inputs: {
      ...authStates.inputs,
      [name]: value,
    }
  })
}

const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const rp = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const handleAuth = () => {
  const email = authStates.inputs.email;
  const password = authStates.inputs.password;
  const confirmPassword = authStates.inputs.confirmPassword;

  if(email !=='' && password !== '') {
    if (re.test(email)) {
        if(rp.test(password)){
          if(authStates.mode === 'login') {
            props.tryAuth(email, password, 'login');
          } else {
              if (password === confirmPassword) {
                props.tryAuth(email, password, 'signup');
              } else {
                alert("Password Fields doesn't Match")
              }
          }
        }else {
          alert('Password must have minimum eight characters, at least one letter and one number')
        }
    } else {
      alert('Invalid Email')
    }
  } else {
      alert("Fill all the Input Fields!")
  }
}

let authModeTitle = authStates.mode === 'signup'? 'Sign up': 'Log In';
let authModeTitleColor = authStates.mode === 'signup'?  'fff' : 'fff';
let authModeBtnColor = authStates.mode === 'signup'?  'f40752' : '009688';
let confirmPassword = authStates.mode === 'signup'?
<TextInput
        style={styles.input}
        placeholder='Confirm Password'
        placeholderTextColor='#fff'
        value={authStates.inputs.confirmPassword}
        onChangeText={value => updateInputs(value, 'confirmPassword')}
      />
:null;
  return (
    <ImageBackground 
      source={loginBackground}
      style={{width:'100%', flex: 1}}>

        <View style={styles.loginView}>
            <View><Text style={{...styles.authModeTitle, color:`#${authModeTitleColor}`}}>{authModeTitle}</Text></View>
            <View style={styles.inputFieldPosition}>
                <TextInput
                  style={{...styles.input, borderColor:`#${authModeTitleColor}`}} 
                  placeholder='Your Email Address'
                  placeholderTextColor='#fff'
                  value={authStates.inputs.email}
                  onChangeText={value => updateInputs(value, 'email')}
                />
                <TextInput
                  style={{...styles.input, borderColor:`#${authModeTitleColor}`}}
                  placeholder='Password'
                  placeholderTextColor='#fff'
                  value={authStates.inputs.password}
                  onChangeText={value => updateInputs(value, 'password')}
                />
                {confirmPassword}
            </View>
            <View style={styles.btnGroup}>
              <View>
                <TouchableOpacity
                  style={{...styles.btnContainer, backgroundColor: `#${authModeBtnColor}`,}}
                  onPress={() => {
                    handleAuth()
                  }}
                >
                    <Text 
                      style={styles.btnStyle}
                    >
                        {authStates.mode === 'login'? 'Log in': 'Sign Up'}
                    </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signBtnPosition}>
                <TouchableOpacity
                  // style={{...styles.btnContainer, backgroundColor: '#1167b1', width: '60%'}}
                  style={{width: 60, color: "yellow", alignSelf: 'center'}}
                  onPress={()=> switchViews()}
                >
                    <Text 
                      style={{...styles.signBtn, color:'#fff'}}
                    >
                        {authStates.mode === 'login'? "Don't have an Account? Sign Up": 'Already have account? Log in'}
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    marginBottom: 10,
    paddingLeft: 10,
    color:'#fff'

  },
  loginView: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop: 80,
  },
  signBtn: {
    width:220,
    color: '',
    alignSelf:'flex-end',
    textAlign:'left',
    padding: 5,
    margin:15,
    marginLeft:-15,
  },
  btnStyle: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    padding: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    width: 150,
    paddingVertical: 5,
    backgroundColor: '#009688',
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  signBtnPosition: {
    marginLeft: 90
  },
  authModeTitle: {
    marginTop:20,
    marginBottom:80,
    fontSize:22,
    fontWeight: '600',
    color: '#8dd0fc',
    margin: 20
  },
  inputFieldPosition: { 
    width:'100%', 
    alignItems:'center', 
    marginTop: 20
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);