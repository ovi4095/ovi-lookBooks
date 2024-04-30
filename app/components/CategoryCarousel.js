import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryCarouselItem from './CategoryCarouselItem'


const CategoryCarousel = ({categories}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      snapToInterval='104'
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
            <CategoryCarouselItem item={item} index={index}/>
        )
      }}
    />
  )
}

export default CategoryCarousel