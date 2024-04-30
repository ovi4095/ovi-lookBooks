import axios from "axios";
import * as actionTypes from './actionTypes';
import { baseUrl } from "./baseURL";

export const loadBooks = books => {
    // console.log("dispatch books", books)
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}
export const loadCategories = categories => {
    return {
        type: actionTypes.LOAD_CATEGORY,
        payload: categories,
    }
}
export const loadReviews = reviews => {
    return {
        type: actionTypes.LOAD_REVIEWS,
        payload: reviews,
    }
}

export const AddingReview = review => dispatch => {
    review.date = new Date().toISOString
    axios.post(baseUrl+'reviews.json',review)
    .then(response => {
        // console.log(response)
    })
    .catch(err => console.log(err))
}

export const fetchBooks = () => dispatch => {
    axios.get(baseUrl+'books.json')
    .then(res => {
        // console.log("Book Data:", res.data);
        dispatch(loadBooks(res.data))
    })
    .catch(err => console.log('Fetching Book Data Error:', err))
}

export const fetchCategories = () => dispatch => {
    axios.get(baseUrl+'categories.json')
    .then(res => dispatch(loadCategories(res.data)))
    .catch(err => console.log('Fetching Categories Data Error:', err))
}

export const fetchReviews = () => (dispatch) => {

    axios.get(baseUrl+'reviews.json')
    .then(response => {
        // console.log("response",response)
        const reviews = [];
        for(let key in response.data) {
            reviews.push({
                ...response.data[key],
                id: key,
            })
        }
        // console.log("reviews:",reviews)
        dispatch(loadReviews(reviews));
    })
    .catch(err => console.log(err))
}