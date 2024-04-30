import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/actionCreators';
import { useIsFocused } from '@react-navigation/native';
import BookItem from '../components/BookItem';
import BookDetailScreen from './BookDetailScreen';

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
  }
}

const BookScreen = (props) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const useFocused = useIsFocused();
  useEffect(() => {
    props.fetchBooks();
  }, [useFocused]);

  const handleSelectedBook = id => {
    const book = props.books.find(book =>{
      return book.id === id;
    })
    setSelectedBook(book);
  }

  const handleHideModal = () => {
    setSelectedBook(null);
  }

  let bookDetail = selectedBook&& <BookDetailScreen
                                      book={selectedBook}   
                                      handleHideModal={handleHideModal}
                                  />

  return (
    <View style={styles.container}>
      {bookDetail}
      <View style={styles.listPosition}>
          <FlatList
              data={props.books}
              renderItem={({item}) => (
                <BookItem 
                    item={item}
                    onItemPressed= {() => handleSelectedBook(item.id)}
                    />
              )}
              keyExtractor={item => item.id.toString()}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  listPosition: {
    padding: 2,
    paddingTop: 0
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);