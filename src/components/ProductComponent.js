import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { ActionTypes } from "../redux/constants/action-types";

const ProductComponent = (props) => {
	// console.warn("props", props);

	const dispatch = useDispatch();

	const deleteProduct = (id) => {
		dispatch({ type: ActionTypes.REMOVE_PRODUCTS, payload: id });
		console.log("delete", id);
	};

	const products = useSelector((state) => state.allProducts.products);
	const renderList = products.map((product) => {
		const { id, title, image, price } = product;

		return (
			<div className="card__item" key={id}>
				<button className="card__like" onClick={() => {}}>
					<FaRegHeart />
				</button>
				<button
					className="card__del"
					onClick={() => {
						deleteProduct(id);
						// console.log("delete", id);
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
