import product from "./ProductsInterface";

export default interface initialStateInterface {
	quantity: number,
	cart: Array<any>,
	products: Array<product>
}