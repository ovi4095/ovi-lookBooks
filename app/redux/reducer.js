import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
    books: [],
    categories: [],
    reviews: [],
    isAuth: false,
    token: null,
    userId: null
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BOOKS:
            // console.log("Book In reducer:",  action.payload)
        return {
                ...state,
                books: action.payload,
            }
        case actionTypes.LOAD_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            }
        case actionTypes.LOAD_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
            }
        case actionTypes.AUTHENTICATE_USER:
                return {
                    ...state,
                    isAuth: true,
                    token: action.payload.token,
                    userId: action.payload.userId
                }
        case actionTypes.LOG_OUT:
                return {
                    ...state,
                    isAuth: false,
                    token: null,
                    userId: null
                }
        default:
            return state;
    }
}