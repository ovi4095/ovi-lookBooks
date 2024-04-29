import { View, Text, Modal, Image,TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Icon from '../components/Icon'
import PostReview from '../components/PostReview'
import ReviewsList from '../components/ReviewsList'
import { connect } from 'react-redux'
import { fetchReviews } from '../redux/actionCreators'
import { useIsFocused } from '@react-navigation/native'

const mapStateToProps = state =>  {
  return {
    reviews: state.reviews,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchReviews: () => dispatch(fetchReviews()),
    // fetchTransaction: () => dispatch(fetchTransaction()),
    // removeTransaction: (key) => dispatch(removeTransaction(key))

  }
}


const BookDetailScreen = (props) => {
  const focused = useIsFocused()
  useEffect(()=>{
    props.fetchReviews()
  },[focused])

  let selectedReviews = props.reviews.filter(reviews => {return reviews.bookId === props.book.id});
  console.log("Book Detaile Review:", selectedReviews);

  let reviewSection = selectedReviews.length !== 0? <View style={styles.reviewListPosition}>
                                                        <ReviewsList reviews={selectedReviews}/>
                                                    </View>: 
                                                    <View style={styles.emptyReviewListPosition}>
                                                        <Text style={styles.emptyReviewList}>no review yet!</Text>
                                                    </View>;
                                                  
  return (
   <Modal>
      <View style={styles.container}>
          <View style={styles.bookDetailBar}>
              <View style={styles.iconPosition}>
                  <TouchableOpacity>
                      <Icon
                          action = {() => props.handleHideModal()} 
                          name='arrow-left'
                          color='#fff'
                          size={20}
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
          <ScrollView 
            nestedScrollEnabled={true}
            style={{margin:0, padding:0}}>
                <View 
                    style={styles.imagePosition}
                >
                    <Image
                        style={styles.image}
                        source={{uri: props.book.image}}
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
                        {props.book.name}
                        </Text>
                    </View>
                    <View
                        style={styles.authorPosition}
                    >   
                        <Text style={{...styles.textBold, fontSize: 16}}>Author:</Text>
                        <Text
                            style={styles.author}
                        >
                        Author: {props.book.author}
                        </Text>
                    </View>
                    <View
                        style={styles.descriptionPosition}
                    >
                        <Text style={{...styles.textBold, fontSize: 14}}>Description:</Text>
                        <Text
                        style={styles.description}
                        >
                        {props.book.description}
                        </Text>
                    </View>
                </View>
                <View style={{...styles.reviewSection, height:selectedReviews.length !== 0?'auto': 600,}}>
                    <View style={styles.authorPosition}>
                        <Text style={{...styles.title, marginLeft:100}}>See Review</Text>
                    </View>
                    <View style={styles.reviewList}>
                        {reviewSection}
                    </View>
                    <View>
                        <PostReview book={props.book}/>
                    </View>
                </View>
          </ScrollView>
      </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 0,
  },
  bookDetailBar: {
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#60696b',
    paddingTop: Platform.OS ==='ios'? 60:20,
    paddingBottom:15,
    margin:0,
  },
  bookDetailPosition: {
    marginRight: 100
  },
  bookDetail: {
    color: "#fff",
    fontSize: 19,
    fontWeight: '600',
   
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
    fontWeight: '600',
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
    fontWeight: '500',
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
    fontWeight: '500',
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
    fontWeight: '500',
    marginTop: 5
  },
  iconPosition: {
    marginLeft:5
  },
  reviewSection: {
    height: 'auto',
    backgroundColor:'#60696b',
    margin:20,
    padding:10,
    borderWidth: 0.3,
    borderRadius: 12,
    marginBottom: Platform.OS === 'ios'? 250:150,
  },
  reviewList: {
    flexDirection: 'column',
  },
  reviewListPosition: {
    marginTop:0,
    marginBottom:50
  },
  emptyReviewListPosition: {
    marginTop:50,
    marginBottom:50
  },
  emptyReviewList: {
    color: '#fff',
    alignSelf:'center',
    fontSize: 24
  },
})


export default connect(mapStateToProps,mapDispatchToProps)(BookDetailScreen);