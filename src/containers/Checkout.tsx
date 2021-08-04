import { useContext } from "react";
import { Link } from "react-router-dom";
import SelectQty from "../components/SelectQty";
import AppContext from "../context/AppContext";
import appContextInterface from "../interfaces/appContextInterface";
import productInterface from "../interfaces/ProductsInterface";
import HandleSumTotal from '../utils/HandleSumTotal';
import CommandEnum from "../enums/commandEnum";

const Checkout = () => {
	const { state : { cart }, removeFromCart, addToCart } : appContextInterface = useContext(AppContext);
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
		let [product] = cart.filter((item: productInterface) => item.title === event.target.name);
		let qty = Number(event.target.value);
		addToCart(product, qty)
	};

	const handleRemove = (product: productInterface) => () => {
		removeFromCart(product)
	}


	return (
		<div className='row'>
			<div className="col-8 align-self-center">
			{
				cart.length === 0 ? <h4>Tu carrito de compras esta vacio</h4> : <h3>Lista de Pedidos</h3>
			}
				<div className="row d-flex align-items-center">
					{
						cart.map((item: productInterface) => (
							<div key={item.id} className='row align-items-center'>
								<img src={item.image} alt={item.title} className='col-3 w-25 h-25'/>
									<p className="col-3">{item.title}</p>
									<div className="col-2 ">
										<SelectQty productName={item.title} stock={item.stock} handleChange={handleChange} qtyOnCart={item.qtyOnCart}/>
									</div>
									<p className="col-2 mb-1">{`$ ${item.price}`}</p>
									<button type='button' className='col-1 offset-sm-1 mb-1 px-0 btn bg-transparent' onClick={handleRemove(item)}>
										<i className='fas fa-trash-alt' style={{color: "red"}}/>
									</button>
								<hr />
							</div>
						))
					}
				</div>
			</div>
			<div className="col-4">
				<p>Precio total {HandleSumTotal(CommandEnum['totalPrice'])}</p>
				<Link to='checkout/information'>
					<button className='btn btn-primary'>Continuar con pedido</button>
				</Link>
			</div>			
		</div>
	)
}

export default Checkout
