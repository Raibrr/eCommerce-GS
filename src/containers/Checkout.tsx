const Checkout = () => {
	return (
		<div className='row'>
			<div className="col-8">
				<h3>Lista de Pedidos</h3>
				<div className="row">
						<p className="col-8 align-self-start">Item name</p>
						<p className="col-2 align-self-end mb-1">$10</p>
							<i className=' col-1 align-self-end mb-1 px-0 fas fa-trash-alt'/>
				</div>
				<hr />
			</div>
			<div className="col-4">
				<p>Precio total $10</p>
				<button className='btn btn-primary'>Continuar con pedido</button>
			</div>			
		</div>
	)
}

export default Checkout
