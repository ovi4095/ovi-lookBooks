import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchBooks, fetchCategories } from '../redux/actionCreators';
import { useIsFocused } from '@react-navigation/native';
import CategoryCarousel from '../components/CategoryCarousel';
import { navigate } from '../NavigationRoot';
import HomeBookList from '../components/HomeBookList';

const mapStateToProps = state => {
  return{
    books: state.books,
    categories: state.categories,
    reviews: state.reviews
  }
}

const mapDispatchTOProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchBooks: () => dispatch(fetchBooks()),
  }
}

const HomeScreen = (props) => {

  const useFocused = useIsFocused();

  useEffect(() =>{
    props.fetchCategories();
    props.fetchBooks();
  },[useFocused])

  return (
    <View style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Find Your</Text>
            <Text style={styles.secondTitle}>Book From Category</Text>
        </View>
        <ScrollView>
            <CategoryCarousel categories={props.categories} />
            <View style={styles.bookSection}>
                <Text style={styles.bookSectionTitle}>See Books</Text>
                <Button title='See All' onPress={() => navigate('Books')}/>
            </View>
            <HomeBookList books={props.books} />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    height:'100%'
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  },
  secondTitle: { 
    fontSize: 32,
    color: '#fff'
  },
  bookSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 18,
    marginTop: 24,
    marginBottom: 10,
  },
  bookSectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps,mapDispatchTOProps)(HomeScreen)