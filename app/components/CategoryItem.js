import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import React from 'react'
import CategoryBookList from '../screens/CategoryBookListScreen'
import { navigate } from '../NavigationRoot'

const CategoryItem = (props) => {
  return (
    <TouchableHighlight 
      onPress={() => navigate('Category Books',{book: props.item})}
      >
        <View style={styles.container}>
            {props.item.image && 
            <Image 
                style={styles.image}
                source={{uri: props.item.image}}
                />}
            <View style={styles.details}>
                <Text 
                    style={styles.name}
                    >{props.item.name}
                </Text>
                <Text 
                    style={styles.description}
                    numberOfLines={3}
                    >
                    {props.item.description}
                </Text>
            </View>
        </View>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#60696b',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 12,
        borderWidth: 0.2,
        padding: 20,
        margin: 0,
        marginTop: 15,
        marginBottom: -5,
        elevation: 5,
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 5
    },
    description: {
        color: '#fff'
    }
})
export default CategoryItem