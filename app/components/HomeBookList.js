import { Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import React from 'react'

const HomeBookList = ({books}) => {
  return (
    <View style={styles.container}>
      {books.map((book)=> {
        return (
            <TouchableOpacity>
                <View key={book.id}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={{uri: book.image}} />
                </View>
                <View style={styles.footer}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{book.name}</Text>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    
  },
  imageBox: {
    width: 180,
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: 180,
    height: 180
  },
  titleBox: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center'
  },
  title: {
    marginVertical: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
})
export default HomeBookList