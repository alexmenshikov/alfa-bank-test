import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
	console.warn("2. action - рендера карточек");
	// console.warn("set", products);
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const favoriteProducts = (products) => {
	console.warn("2. action - favorite");
	return {
		type: ActionTypes.FAVORITE_PRODUCTS,
		payload: products,
	};
};

export const removeProducts = (products) => {
	console.warn("2. action - удаления");
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};
