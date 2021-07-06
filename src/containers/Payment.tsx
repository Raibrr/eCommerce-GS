import { useContext } from "react";
import AppContext from "../context/AppContext";
import { config } from "dotenv";
import { PayPalButton } from "react-paypal-button-v2";
import product from "../interfaces/ProductsInterface";
import HandleSumTotal from "../utils/HandleSumTotal";
import { useHistory } from "react-router-dom";
import productInterface from "../interfaces/ProductsInterface";
import appContextInterface from "../interfaces/appContextInterface";
config();
const Payment = () => {
	const { state: {cart, buyer}, addNewOrder } : appContextInterface = useContext(AppContext);
	const history = useHistory();
	const reducer = (acumulator: number, currentValue: productInterface) : number => acumulator + currentValue.qtyOnCart;
	const totalQty = cart.reduce(reducer, 0)
	const paypalButtonStyle = {
		layout: 'vertical',
		shape: 'rect',
		color: 'gold'
	};
	const options = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    intent: 'capture',
    currency: 'MXN'
  };
	
	const handlePaymentSucces = (data: any) => {
		console.log(data);
		if(data.status === 'COMPLETED') {
			const newOrder = {
				buyer,
				product: cart,
				payment: data
			}
			addNewOrder(newOrder);
			history.push('/checkout/success');
		}
	}
	return (
		<div className='row'>
			<div className="col-6">
				{
					cart.map((item:product) => (
						<div className='card mb-2 shadow bg-body rounded' key={item.id}>
						<div className='row'>
							<img src={item.image} alt={item.title} className='w-25 h-25 col-4'/>
							<div className="col-8 card-body">
								<p className='row my-0 fw-bold'>{item.title}</p>
								<p className='row my-0'>${item.price} c/u</p>
								<p className='row my-0 text-sm fw-light'>Cantidad: {item.qtyOnCart}</p>
							</div>
						</div>
						</div>
					))
				}
			</div>
			<div className="col-4 card">
				<p className='fw-bold'>Resumen del pedido:</p>
				<div className="row">
					<p className='col-6 mb-1'>{totalQty} Productos:</p>
					<p className='col-6 mb-1'>${HandleSumTotal()}</p>
					<p className='col-6'>Envio</p>
					<p className='col-6'>$0.00</p>
				</div>
				<hr />
				<div className="row">
					<p className="col-6">Total</p>
					<p className="col-6">{HandleSumTotal()} + precio envio</p>
				</div>
				<PayPalButton
					options={options}
					style={paypalButtonStyle}
					amount={HandleSumTotal()}
					onButtonReady={() => console.log('start payment')}
					onSuccess={(data: object) => handlePaymentSucces(data)}
					onError={(error:any) => console.log(error)}
					/>
			</div>
		</div>
	)
}

export default Payment
