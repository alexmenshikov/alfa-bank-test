import { ActionTypes } from "../constants/action-types";

const initialState = {
	products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };

		case ActionTypes.REMOVE_PRODUCTS:
			const filterProducts = state.filter((product) => product.id !== payload && product);
			state = filterProducts;
			return state;

		default:
			return state;
	}
};
