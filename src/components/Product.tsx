import ProductsInterface from '../interfaces/ProductsInterface';
import '../styles/components/Products.css'

const Product = ({ product } : { product: ProductsInterface }) => {
	return (
		<div className="col-6 col-md-4 px-2 my-2 ">
		<div className='card shadow bg-body rounded'>
			<img className='card-top-img' src={product.image} alt={product.title}/>
			<div className="card-body pb-1">
				<h5 className="card-title">{product.title}</h5>
				<p className="card-text"> {product.description} </p>
				<div className="row d-flex justify-content-center ">
					<button className='btn btn-outline-primary col-12 '> Comprar </button>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Product
