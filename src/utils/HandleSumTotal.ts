import { useContext } from "react";
import AppContext from "../context/AppContext";
import appContextInterface from "../interfaces/appContextInterface";
import CommandEnum from "../enums/commandEnum";
import productInterface from "../interfaces/ProductsInterface";

const HandleSumTotal = (command: CommandEnum) => {
	const { state: { cart } } : appContextInterface = useContext(AppContext);
	const reducer = (acumulator: number, currentValue: productInterface): number => {
		if(command === "totalPrice") {
			return acumulator + (currentValue.price * currentValue.qtyOnCart);
		} 
		if(command === "totalQty") {
			return acumulator + currentValue.qtyOnCart;
		}
		return acumulator;
}
	const sum: number = cart.reduce(reducer, 0);
	return sum;
};

export default HandleSumTotal;