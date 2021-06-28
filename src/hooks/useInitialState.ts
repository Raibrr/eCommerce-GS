import { useState } from "react";
import initialState from '../initialState';
import initialStateInterface from '../interfaces/initialStateInterface';
import product from "../interfaces/ProductsInterface";

const useInitialStete = () => {
	const [state, setState] = useState<initialStateInterface>(initialState);

	const addToCard = (payload : product, quantity: number) => {
		payload.qtyOnCart = quantity;
		let payloadAlrreadyInCart = state.cart.filter(item => item.id === payload.id)
		if(payloadAlrreadyInCart.length === 0) {
			setState({
				...state,
				cart: [...state.cart, payload],
			});
		} else {
			let position = state.cart.findIndex(item => item.id === payload.id);
			state.cart[position].qtyOnCart = payload.qtyOnCart
			setState({
				...state,
				cart: [...state.cart]
			});
		}
	};

	const removeFromCart = (payload : product) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id)
		});
	};

	return {
		addToCard,
		removeFromCart,
		state,
	}
};

export default useInitialStete;