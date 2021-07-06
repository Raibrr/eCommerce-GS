import { useContext } from "react";
import AppContext from "../context/AppContext";
import appContextInterface from "../interfaces/appContextInterface";
import productsInterface from "../interfaces/ProductsInterface";
import Product from "./Product";


const Products = () => {
	const { state: { products }, addToCart } : appContextInterface = useContext(AppContext);
	return (
		<div className='row d-flex'>
			{
				products.map((product: productsInterface) => (
					<Product key={product.id} product={product} addToCard={addToCart}/>
				))
			}
		</div>
	) 
};

export default Products
