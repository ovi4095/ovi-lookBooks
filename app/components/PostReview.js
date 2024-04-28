import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-native-star-rating-widget';

const mapDispatchToProps = dispatch => {
    return {
      AddingTransaction: transaction => dispatch(AddingTransaction(transaction)),
    }
  }

const PostReview = (props) => {

    const [inputName, setInputName] = useState(null);
    const [inputDescription, setInputDescription] = useState('');
    const [rating, setRating] = useState(0);

    console.log("star Rating:", rating)

    return (
        <StarRating
        rating={rating}
        onChange={setRating}
      />
    )
}

export default connect(null, mapDispatchToProps)(PostReview)