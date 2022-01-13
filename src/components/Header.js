import React from "react";

const Header = () => {
	const onClickFilter = () => {
		alert("Фильтр");
	};

	return (
		<div className="menu">
			<h2>Cards</h2>
			<button className="filter" onClick={onClickFilter}>
				Фильтр
			</button>
		</div>
	);
};

export default Header;
