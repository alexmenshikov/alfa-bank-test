import React from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {favoriteProducts} from "../redux/actions/productActions";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";

// const Favorite = (props) => {
//     return (
//         <button className='card__like' onClick={props.changeLikes}>{props.likeStatus}</button>
//     )
//     // products.forEach((product) => {
//     //     if (id === product.id) {
//     //         if (product.favorite === false) {
//     //             product.favorite = true;
//     //         } else {
//     //             product.favorite = false;
//     //         }
//     //     }
//     // })
//
//     // console.warn("1. dispatch - favorite");
//
//     // dispatch(favoriteProducts(products));
// };

// function mapStateToProps(state) {
//     console.log('mapStateToProps > ', state);
//     const {allProducts} = state;
//     return {
//         likesStatus: allProducts.likesStatus
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         changeLikes: () => {
//             console.log('click change');
//             const action = {type: 'FAVORITE_PRODUCTS'};
//             dispatch(action);
//         }
//     }
// }

const Favorite = (id, products, dispatch) => {
    products.forEach((product) => {
        if (id === product.id) {
            if (product.favorite === false) {
                product.favorite = true;
            } else {
                product.favorite = false;
            }
        }
    })

    console.warn("1. dispatch - favorite");

    dispatch(favoriteProducts(products));
};

export default Favorite;

// export default connect(mapStateToProps, mapDispatchToProps)(Favorite);