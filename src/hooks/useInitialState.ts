import { useState } from "react";
import initialState from '../initialState';
import initialStateInterface from '../interfaces/initialStateInterface';
import inputsInterface from "../interfaces/inputsInterface";
import productInterface from "../interfaces/ProductsInterface";

const useInitialStete = () => {
	const [state, setState] = useState<initialStateInterface>(initialState);

	const addToCart = (payload : productInterface, quantity: number): void => {
		payload.qtyOnCart = quantity;
		let payloadAlrreadyInCart = state.cart.filter(item => item.id === payload.id)
		if(payloadAlrreadyInCart.length === 0) {
			setState({
				...state,
				cart: [...state.cart, payload],
			});
		} else {
			let position = state.cart.findIndex((item: productInterface) : boolean => item.id === payload.id);
			state.cart[position].qtyOnCart = payload.qtyOnCart
			setState({
				...state,
				cart: [...state.cart]
			});
		}
	};

	const removeFromCart = (payload : productInterface) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id)
		});
	};

	const addBuyer = (payload: inputsInterface) => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
		})
	};

	const addNewOrder = (payload:any) => {
		setState({
			...state,
			order: [...state.order, payload]
		})
	};

	return {
		addToCart,
		addNewOrder,
		removeFromCart,
		addBuyer,
		state,
	}
};

export default useInitialStete;