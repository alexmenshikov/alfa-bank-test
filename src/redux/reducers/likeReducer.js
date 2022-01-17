import { ActionTypes } from "../constants/action-types";
// import {FaHeart, FaRegHeart} from "react-icons/fa";

const initialState = {
    likesStatus: '♡'
}

export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer > ', action);

    switch (action.type) {
        case ActionTypes.FAVORITE_PRODUCTS:
            return {
                ...state,
                likesStatus: state.likesStatus = '♥'
            }

        default:
            return state;
    }
}