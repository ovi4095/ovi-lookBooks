import { View, Text, Modal, Image,TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import React from 'react'
import Icon from '../components/Icon'
import PostReview from '../components/PostReview'
import ReviewsList from '../components/ReviewsList'

const BookDetailScreen = ({book, handleHideModal}) => {
  return (
   <Modal>
      <View style={styles.container}>
          <View style={styles.bookDetailBar}>
              <View style={styles.iconPosition}>
                  <TouchableOpacity>
                      <Icon
                          action = {() => handleHideModal()} 
                          name='arrow-left'
                          color='#fff'
                          size={24}
                          />
                  </TouchableOpacity>
              </View>
              <View style={styles.bookDetailPosition}>
                  <Text
                      style={styles.bookDetail}
                  >
                      Book Detail
                  </Text>
              </View>
          </View>
          <ScrollView style={{margin:0, padding:0}}>
                <View 
                    style={styles.imagePosition}
                >
                    <Image
                        style={styles.image}
                        source={{uri: book.image}}
                    />
                </View>
                <View
                    style={styles.infoDetail}
                >
                    <View
                        style={styles.titlePosition}
                    >
                        <Text style={styles.textBold}>Book:</Text>
                        <Text
                            style={styles.title}
                        >
                        {book.name}
                        </Text>
                    </View>
                    <View
                        style={styles.authorPosition}
                    >   
                        <Text style={{...styles.textBold, fontSize: 16}}>Author:</Text>
                        <Text
                            style={styles.author}
                        >
                        Author: {book.author}
                        </Text>
                    </View>
                    <View
                        style={styles.descriptionPosition}
                    >
                        <Text style={{...styles.textBold, fontSize: 14}}>Description:</Text>
                        <Text
                        style={styles.description}
                        >
                        {book.description}
                        </Text>
                    </View>
                </View>
                <View style={styles.reviewSection}>
                    <View style={styles.authorPosition}>
                        <Text style={{...styles.title, marginLeft:100}}>See Review</Text>
                    </View>
                    <View>
                        <ReviewsList/>
                    </View>
                    <View>
                        {/* <PostReview book={book}/> */}
                    </View>
                </View>
          </ScrollView>
      </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 0,
  },
  bookDetailBar: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#60696b',
    paddingTop: 20,
    paddingBottom:20,
    margin:0,
  },
  bookDetailPosition: {
    marginRight: 100
  },
  bookDetail: {
    color: "#fff",
    fontSize: 24,
    // fontWeight: 600,
   
  },
  infoDetail: {
    backgroundColor:'#60696b',
    margin:20,
    padding:10,
    borderWidth: 0.3,
    borderRadius: 12,
    elevation: 10
  },
  textBold: {
    color: '#fff',
    fontSize:20,
    // fontWeight: 600,
  },
  imagePosition: {
    alignItems: 'center',
    marginTop:20,
    marginBottom: 20,
  },
  image: {
    width:"100%",
    height:350
  },
  titlePosition: {
    flexDirection:'row',
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
  
  },
  title: {
    alignSelf:'auto',
    color: '#fff',
    fontSize:20,
    // fontWeight: 500,
    marginLeft: 5,
  },
  authorPosition: {
    alignItems:'flex-start',
    flexDirection:'row',
    marginBottom: 15,
    padding: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  author: {
    color: '#fff',
    fontSize:16,
    // fontWeight: 500,
    marginLeft: 5,
  },
  descriptionPosition: {
    flexDirection: 'column',
    marginBottom: 15,
    padding: 5,
  },
  description: {
    color: '#fff',
    fontSize:14,
    // fontWeight: 500,
    marginTop: 5
  },
  iconPosition: {
    marginLeft:10
  },
  reviewSection: {
    height: 500,
    backgroundColor:'#60696b',
    margin:20,
    padding:10,
    borderWidth: 0.3,
    borderRadius: 12,
    marginBottom: 150,
  }
})


export default BookDetailScreen