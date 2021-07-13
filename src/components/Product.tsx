import { useState } from "react";
import useChangeLightMode from "../hooks/useChangeLightMode";
import ProductsInterface from "../interfaces/ProductsInterface";
import "../styles/components/Products.css";
import SelectQty from "./SelectQty";

const Product = ({ product, addToCard } : {product: ProductsInterface, addToCard: Function  }) => {
	const [quantity, setQuantity] = useState(1);

	const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) : void => setQuantity(Number(e.target.value));
	const handleClick = () : void => {
		addToCard(product, quantity);
	};
	const {image,title,description, stock, qtyOnCart} = product;
	return (
		<div className="col-6 col-md-4 px-2 my-2 ">
			<div className={`card shadow rounded ${useChangeLightMode('Products')}`}>
				<img
					className="card-top-img"
					src={image}
					alt={title}
				/>
				<div className="card-body pb-1">
					<h5 className="card-title">{title}</h5>
					<p className="card-text"> {description} </p>
					<div className="row">
						<p className="col-5 pe-0">Cantidad</p>
						<div className="col-4 ps-0">
							<SelectQty productName={title} stock={stock} handleChange={handleChange} qtyOnCart={qtyOnCart}/>
						</div>
					</div>
					<div className="row d-flex justify-content-center ">
						<button
							className="btn btn-outline-primary col-12"
							onClick={handleClick}
						>Comprar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
