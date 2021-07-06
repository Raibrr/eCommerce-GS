import initialStateInterface from "./initialStateInterface";

export default interface appContextInterface {
	addToCart: Function,
	addNewOrder: Function,
	removeFromCart: Function,
	addBuyer: Function,
	state: initialStateInterface
}