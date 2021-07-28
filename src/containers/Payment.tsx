import { useContext } from "react";
import AppContext from "../context/AppContext";
import { config } from "dotenv";
import { PayPalButton } from "react-paypal-button-v2";
import product from "../interfaces/ProductsInterface";
import HandleSumTotal from "../utils/HandleSumTotal";
import { useHistory } from "react-router-dom";
import appContextInterface from "../interfaces/appContextInterface";
import CommandEnum from "../enums/commandEnum";
config();
const Payment = () => {
	const { state: {cart, buyer}, addNewOrder } : appContextInterface = useContext(AppContext);
	const history = useHistory();
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
		}
		history.push('/checkout/success');
	}
	return (
		<div className='row' style={{marginTop: "130px"}}>
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
					<p className='col-6 mb-1'>{HandleSumTotal(CommandEnum['totalQty'])} Productos:</p>
					<p className='col-6 mb-1'>${HandleSumTotal(CommandEnum['totalPrice'])}</p>
					<p className='col-6'>Envio</p>
					<p className='col-6'>$0.00</p>
				</div>
				<hr />
				<div className="row">
					<p className="col-6">Total</p>
					<p className="col-6">{HandleSumTotal(CommandEnum['totalPrice'])} + precio envio</p>
				</div>
				<PayPalButton
					options={options}
					style={paypalButtonStyle}
					amount={HandleSumTotal(CommandEnum['totalPrice'])}
					onButtonReady={() => console.log('button ready')}
					onSuccess={(data: object) => handlePaymentSucces(data)}
					onError={(error:any) => console.log(error.message, error)}
					/>
			</div>
		</div>
	)
}

export default Payment
