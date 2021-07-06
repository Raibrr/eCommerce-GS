import { useContext } from "react";
import AppContext from "../context/AppContext";
import appContextInterface from "../interfaces/appContextInterface";
import productInterface from "../interfaces/ProductsInterface";

const HandleSumTotal = () => {
	const { state: { cart } } : appContextInterface = useContext(AppContext);
	const reducer = (acumulator: number, currentValue: productInterface): number => acumulator + (currentValue.price * currentValue.qtyOnCart);
	const sum: number = cart.reduce(reducer, 0);
	return sum;
};

export default HandleSumTotal;