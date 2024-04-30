import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { navigate } from '../NavigationRoot';

const CategoryCarouselItem = ({item, index}) => {
  return (
    <TouchableOpacity
        onPress={() => navigate('Category Books',{book: item})}
        style={{
        marginLeft: 24,
        marginRight: index === item.length - 1 ? 24 : 0,
        }}>
            <View style={[styles.card, shadow.dark]}>
                <View style={styles.imageBox}>
                    <Image source={{uri: item.image}} style={styles.image} />
                </View>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </View>
  </TouchableOpacity>
  )
}
const shadow = {
    light: {
      shadowColor: "#333",
      shadowRadius: 4,
      shadowOpacity: 0.1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    dark: {
      shadowColor: '#333',
      shadowRadius: 4,
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
  };
  

const styles = StyleSheet.create({
    card: {
        width: 280,
        height: 200,
        marginVertical: 10,
        },
    imageBox: {
        width: 280,
        height: 200,
        borderRadius: 16,
        overflow: 'hidden',
        },
    image: {
        width: 280,
        height: 200,
        resizeMode: 'cover',
        },
    titleBox: {
        marginTop: -50,
        marginLeft: 20,
        backgroundColor: '#000',
        opacity:0.5,
        width: 180,
        alignItems: 'center',
        padding:10,
        borderRadius: 16,
        },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffd',
        },
  });
  

export default CategoryCarouselItem