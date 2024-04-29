import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ReviewItem from './ReviewItem'



const ReviewsList = (props) => {
    // console.log("review list:", props.reviews.map((review, i) => review.name.forEach(name => name)))
//     const reviews = props.reviews.map((item) =>{
//     return <ReviewItem name={item.name} review= {item.review} rating={item.rating}/>
// })
//     console.log('Review List:', reviews)
    // let name = props.reviews.map((item) => item.name)
    // let review = props.reviews.map((item) => item.review)
    // let rating = props.reviews.map((item) => item.rating)
    
    return (
        <FlatList
            data={props.reviews}
            renderItem={({item})=>(
           <ReviewItem name={item.name} review={item.review} rating={item.rating}/>
            )}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            
        />
  )
}

export default ReviewsList