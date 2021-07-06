import productInterface from "./ProductsInterface";
import inputsInterface from "./inputsInterface";

export default interface initialStateInterface {
	order: Array<any>,
	buyer: Array<inputsInterface>,
	cart: Array<productInterface>,
	products: Array<productInterface>
}