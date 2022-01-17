import { ActionTypes } from "../constants/action-types";

const initialState = {
	products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			console.warn("3. reducer - рендера карточек");
			return { ...state, products: payload };

		case ActionTypes.FAVORITE_PRODUCTS:
			console.warn("3. reducer - favorite");



			// return state.filter(product => product.id !== payload);

		case ActionTypes.REMOVE_PRODUCTS:
			console.warn("3. reducer - удаления");
			// const updateProduct = state.map((product) => product.id === payload && product);
			// return state;
			return { ...state, products: payload };

		// case ActionTypes.REMOVE_PRODUCTS:
		// 	return {
		// 		product: state.filter((product) => product.id !== payload && product),
		// 	};

		// case ActionTypes.REMOVE_PRODUCTS:
		// 	const filterProducts = state.filter((product) => product.id !== payload && product);
		// 	state = filterProducts;
		// 	return state;

		default:
			return state;
	}
};
