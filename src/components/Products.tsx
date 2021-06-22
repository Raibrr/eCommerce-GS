import Product from "./Product";
import ProductsInterface from '../interfaces/ProductsInterface';


const Products = ({ products } : {products: Array<ProductsInterface>}) => {
	return (
		<div className='row d-flex'>
			{
				products.map(product => (
					<Product key={product.id} product={product} />
				))
			}
		</div>
	) 
}

export default Products
