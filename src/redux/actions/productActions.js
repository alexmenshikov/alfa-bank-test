import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
	// console.warn("set", products);

	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

// export const removeProducts = () => {
// 	// console.warn("delete");

// 	return {
// 		type: ActionTypes.REMOVE_PRODUCTS,
// 	};
// };
