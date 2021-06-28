import { useContext } from "react";
import SelectQty from "../components/SelectQty";
import AppContext from "../context/AppContext";

const Checkout = () => {
	const { state : { cart }, removeFromCart, addToCard } = useContext(AppContext);

	const handleSumTotal = () => {
		const reducer = (acumulator: any, currentValue: any) => acumulator + (currentValue.price * currentValue.qtyOnCart);
		const sum = cart.reduce(reducer, 0);
		return sum;
	};

	const handleChange = (e: any) => {
		let [product] = cart.filter((item: any) => item.title === e.target.name);
		let qty = Number(e.target.value);
		addToCard(product, qty)
	};

	const handleRemove = (product: any) => () => {
		removeFromCart(product)
	}


	return (
		<div className='row'>
			<div className="col-8 align-self-center">
			{
				cart.length === 0 ? <h4>Tu carrito de compras esta vacio</h4> : <h3>Lista de Pedidos</h3>
			}
				<div className="row">
					{
						cart.map((item: any) => (
							<>
								<p className="col-3 align-self-start">{item.title}</p>
								<div className="col-2 align-self-start">
									<SelectQty productName={item.title} stock={item.stock} handleChange={handleChange} qtyOnCart={item.qtyOnCart}/>
								</div>
								<p className="col-2 offset-sm-3 mb-1">{`$ ${item.price}`}</p>
								<button type='button' className='col-1 offset-sm-1 mb-1 px-0 btn bg-transparent' onClick={handleRemove(item)}>
									<i className='fas fa-trash-alt' style={{color: "red"}}/>
								</button>
								<hr />
							</>
						))
					}
				</div>
			</div>
			<div className="col-4">
				<p>Precio total {handleSumTotal()}</p>
				<button className='btn btn-primary'>Continuar con pedido</button>
			</div>			
		</div>
	)
}

export default Checkout
