import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ReviewItem from './ReviewItem'



const ReviewsList = (props) => {    
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