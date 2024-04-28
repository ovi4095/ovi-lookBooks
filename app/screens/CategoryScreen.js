import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actionCreators';
import { useIsFocused } from '@react-navigation/native';
import BookItem from '../components/BookItem';
import CategoryItem from '../components/CategoryItem';

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

const CategoryScreen = (props) => {
  const useFocused = useIsFocused();
  useEffect(() => {
    props.fetchCategories();
  }, [useFocused]);
  return (
    <View>
      <Text>Book Category</Text>
      <FlatList
          data={props.categories}
          renderItem={({item}) => (
            <CategoryItem item={item}/>
          )}
          keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);