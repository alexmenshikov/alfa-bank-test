import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, removeProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const arrayItem = [];

	const fetchProducts = async () => {
		const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
			console.log("Err", err);
		});

		response.data.forEach((product) => {
			const { id, title, image, price } = product;
			arrayItem.push({ id, title, image, price, favorite: false });
		});

		console.warn("1. dispatch - рендера карточек");
		dispatch(setProducts(arrayItem));
		// dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="container">
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
