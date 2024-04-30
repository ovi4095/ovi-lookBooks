import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actionCreators';
import { useIsFocused } from '@react-navigation/native';
import BookItem from '../components/BookItem';
import CategoryItem from '../components/CategoryItem';
import { navigate } from '../NavigationRoot';

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
    <View style={styles.container}>
        <View style={styles.listPosition}>    
            <FlatList
                data={props.categories}
                renderItem={({item}) => (
                  <CategoryItem item={item} selectCategory={() => props.navigation.navigate('Category Books')}/>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  listPosition: {
    padding: 5,
    paddingTop: 0
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);