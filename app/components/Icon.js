import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'
const Icon = (props) => {
  return (
    <TouchableOpacity
        onPress={props.action}
        style={{
            ...props.iconStyle,
        }}    
    >
        <FontAwesome5 
            name={props.name}
            size={props.size} 
            color={props.color}/>
    </TouchableOpacity>
  )
}

export default Icon