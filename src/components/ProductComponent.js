import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
// import { ActionTypes } from "../redux/constants/action-types";
// import {favoriteProducts, setProducts, removeProducts} from "../redux/actions/productActions";
import Favorite from "./Favorite";

const ProductComponent = () => {
	const dispatch = useDispatch();

	// const deleteProduct = (id) => {
	// 	dispatch({ type: ActionTypes.REMOVE_PRODUCTS, payload: id });
	// 	console.log("delete", id);
	// };

	const showFavorite = (value) => {
		if (value) {
			return <FaRegHeart />;
		}
		return <FaHeart />;
	};

	const products = useSelector((state) => state.allProducts.products);

	// меняем статус favorite продукта
	// const favoriteChange = (id) => {
	// 	products.forEach((product) => {
	// 		if (id === product.id) {
	// 			if (product.favorite === false) {
	// 				product.favorite = true;
	// 				// showFavorite(id);
	// 				// console.warn("вызвали смену", id);
	// 			} else {
	// 				product.favorite = false;
	// 			}
	// 		}
	// 	})
	//
	// 	console.warn("1. dispatch - favorite");
	// 	dispatch(favoriteProducts(products));
	// };

	// удалить продукт
	// const removeProduct = (id) => {
	// 	console.log("1. зашли в удаление");
	// 	const newList = products.map((product) => {
	// 		if (id === product.id) {
	// 			console.log(product.title);
	// 			console.log("2. совпали id");
	// 			// newList.push(product);
	// 		}
	// 	})
	// 	console.warn(newList);
	// 	// dispatch(setProducts(newList));
	// 	// console.log("записали массив");
	// };

	const renderList = products.map((product) => {
		const { id, title, image, price } = product;

		// const product = useSelector((state) => state);
		// const currentProduct = product.find((product) => product.id === parseInt(id));

		return (
			<div className="card__item" key={id}>
				<button
					className="card__like"
					onClick={() => {
						console.log("нажали favorite карточка", id);
						// favoriteChange(id);
						Favorite(id, products, dispatch);
					}}
				>
					<>{showFavorite(id)}</>
					{/*<FaRegHeart />*/}
				</button>
				{/*<Favorite />*/}
				<button
					className="card__del"
					onClick={() => {
						console.log("нажали delete карточка", id);
						// removeProduct(id);
					}}
				>
					<FaRegTrashAlt />
				</button>
				<div className="card__item-image">
					<img src={image} alt={title} />
				</div>
				<div className="card__item-content">
					<div className="card__item-title">{title}</div>
					<div className="card__item-price">$ {price}</div>
				</div>
			</div>
		);
	});

	return <>{renderList}</>;
};

export default ProductComponent;
