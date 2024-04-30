import { View, Text, Modal, Image,TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Icon from '../components/Icon'
import PostReview from '../components/PostReview'
import ReviewsList from '../components/ReviewsList'
import { connect } from 'react-redux'
import { fetchReviews } from '../redux/actionCreators'
import { useIsFocused } from '@react-navigation/native'
import { navigate } from '../NavigationRoot'
import { StarRatingDisplay } from 'react-native-star-rating-widget'

const mapStateToProps = state =>  {
  return {
    reviews: state.reviews,
    isAuth: state.isAuth
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
  let postReview = props.isAuth === true? <PostReview book={props.book}/>:(
                                          <TouchableOpacity
                                             onPress={() => {
                                              navigate('Login');
                                              props.handleHideModal();
                                              }}
                                            >
                                              <View style={styles.authBtn}>
                                                  <Text style={styles.authText}>Sign in to post Review</Text>
                                              </View>
                                          </TouchableOpacity>)
                                          
  let starRaingCount = 0;
  for(review of selectedReviews) {
    starRaingCount += parseFloat(review.rating)
  }
  let averageRating = parseInt(parseFloat(starRaingCount)/parseInt(selectedReviews.length));
  

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
                    <View style={styles.ratingPosition}>
                        <View style={styles.ratingTitlePosition}>
                            <Text  
                                style={styles.ratingTitle}>Rating:</Text>
                        </View>
                        <View style={styles.starPosition}>
                            <StarRatingDisplay
                                starStyle={{width:5}}
                                starSize={14}
                                rating={averageRating}
                            />
                        </View>
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
                        {postReview}
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
    width: 323,
  
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
    padding: 5,
    paddingBottom: 5,
    
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
  authBtn: {
    backgroundColor: '#333',
    width: 250,
    alignItems:'center',
    borderRadius: 16,
    alignSelf: 'center',
    marginBottom:30

  },
  authText: {
    color:'#fff',
    fontSize: 20,
    padding:10,
  },
  ratingPosition: {
    padding:5,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom:15,
    paddingBottom:10
  },
  review: {
    color: '#fff',
    fontSize:16,
    paddingLeft: 5,
    marginTop: 5
  },
  ratingTitlePosition: {
    alignSelf:'center',
  },
  ratingTitle: {
    color:'#fff',
    fontSize:16,
  },
  starPosition: {
    marginTop: 4
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(BookDetailScreen);