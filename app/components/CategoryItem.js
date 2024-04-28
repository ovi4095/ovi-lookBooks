import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import React from 'react'

const CategoryItem = (props) => {
  return (
    <TouchableHighlight 
      // onPress={props.selectDish}
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
      alignItems: 'flex-start',
      flexDirection: 'row',
      padding: 15,
      border: '1px solid gray',
      borderRadius: 12,
      padding: 20,
      margin: 5,
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
      fontWeight: '500',
  },
  description: {
      color: '#6e6969'
  }
})
export default CategoryItem