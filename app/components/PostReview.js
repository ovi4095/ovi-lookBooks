import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-native-star-rating-widget';
import { AddingReview, fetchReviews } from '../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        AddingReview: review => dispatch(AddingReview(review)),
        fetchReviews: () => dispatch(fetchReviews())
    }
  }

const PostReview = (props) => {

    const [inputName, setInputName] = useState(null);
    const [inputReview, setInputReview] = useState('');
    const [rating, setRating] = useState(0);

    // console.log("star Rating:", book.id)

    const handleAddingReview = () => {
        if (inputName === '' || inputReview === '') {
            alert('Name and Review field must not be Empty!')
        } else {
            props.AddingReview({
                id: Math.random().toString(),
                name: inputName,
                review: inputReview,
                rating: rating.toString(),
                bookId: parseInt(props.book.id),
            })
        };
        setInputName('');
        setInputReview('');
        setRating(0);
        props.fetchReviews()
    }

    return (
        <View 
            style={styles.reviewContainer}
        >
            <View style={styles.ratingPosition}>
                <View style={styles.ratingTitlePosition}>
                    <Text 
                        style={styles.ratingTitle}>Rating:</Text>
                </View>
                <View>
                    <StarRating
                        starStyle={{width:15}}
                        starSize={25}
                        rating={rating}
                        onChange={setRating}
                    />
                </View>
            </View>
            <View style={styles.inputFieldPosition}>
                <TextInput
                    style={styles.input} 
                    placeholder='Your Name'
                    placeholderTextColor='#fff'
                    value={inputName}
                    onChangeText={text => setInputName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Write your review here...'
                    placeholderTextColor='#fff'
                    value={inputReview}
                    onChangeText={text => setInputReview(text)}
                />
            </View>
            <View style={styles.btnPosition}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            handleAddingReview();
                        }}
                        >
                        <Text style={styles.btnTitle}>
                            Post Review
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer: {
        borderWidth: 0.4,
        borderRadius: 12,
        paddingTop:10,
        paddingBottom: 20,
        
    },
    ratingPosition: {
        padding:5,
        display: 'flex',
        flexDirection: 'row',
    },
    ratingTitlePosition: {
        alignSelf:'center',
        marginLeft:35,
    },
    ratingTitle: {
        color:'#fff',
        fontSize:18,
    }, 
    inputFieldPosition: { 
        width:'100%', 
        alignItems:'center', 
        marginTop: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 10,
        color:'#fff'
    
    },
    btnPosition: {
        marginTop:5
    },
    btn: {
        width: 200,
        backgroundColor: '#3C3C3C',
        borderRadius: 15,
        padding:10,
        alignSelf:'center',
    },
    btnTitle: {
        color: '#fff',
        fontSize: 18,
        alignSelf:'center',
    },
})

export default connect(null, mapDispatchToProps)(PostReview)