import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import avatar from '../../assets/image/profileAvatar.png'
import {StarRatingDisplay}  from 'react-native-star-rating-widget';

const ReviewItem = (props) => {
    // console.log("Re ite,",props.name)
  return (
    <View style={styles.container}>
      <View style={styles.imagePosition}>
          <Image
              source={avatar}
              style={styles.image}
          />
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewNamePosition}>
              <Text style={styles.reviewName}>Name: {props.name}</Text>
        </View>
        <View style={styles.reviewPosition}>
              <Text style={styles.review}>{props.review}</Text></View>
        <View style={styles.ratingPosition}>
                <View style={styles.ratingTitlePosition}>
                    <Text  
                        style={styles.ratingTitle}>Rating:</Text>
                </View>
                <View style={styles.starPosition}>
                    <StarRatingDisplay
                        starStyle={{width:5}}
                        starSize={14}
                        rating={props.rating}
                        // onChange={()=> null}
                    />
                </View>
            </View>
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  imagePosition: {},
  image: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  reviewContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  reviewNamePosition: {},
  reviewName: {
    color: '#fff',
    fontSize:18,
    paddingLeft: 5
  },
  ratingPosition: {
    padding:5,
    display: 'flex',
    flexDirection: 'row',
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
    fontSize:13,
},
starPosition: {
    marginTop: 4
}
})

export default ReviewItem