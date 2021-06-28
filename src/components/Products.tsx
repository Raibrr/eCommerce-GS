import { useContext } from "react";
import AppContext from "../context/AppContext";
import Product from "./Product";


const Products = () => {
	const { state: { products }, addToCard} = useContext(AppContext);
	//const handleAddToCart = (product: any) => () => addToCard(product)
	return (
		<div className='row d-flex'>
			{
				products.map((product: any) => (
					<Product key={product.id} product={product} addToCard={addToCard}/>
				))
			}
		</div>
	) 
}

export default Products
