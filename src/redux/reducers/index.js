import {combineReducers} from "redux";
import {productReducer} from "./productReducer";
import {likesReducer} from "./likeReducer";

const reducers = combineReducers({
	allProducts: productReducer,
	likesReducer: likesReducer
});

export default reducers;
