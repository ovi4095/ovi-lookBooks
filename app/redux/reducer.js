import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
    books: [],
    categories: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BOOKS:
            console.log("Book In reducer:",  action.payload)
        return {
                ...state,
                books: action.payload,
            }
        case actionTypes.LOAD_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            }
        default:
            return state;
    }
}