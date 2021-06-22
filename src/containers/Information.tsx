const Information = () => {
	return (
		<div className="row">
			<div className="col-8 align-self-start">
				<h4>Informacion de contacto</h4>
				<form className='row'>
					<div className="col-6">
						<label htmlFor="fullName">Nombre completo</label>
						<input type="text" className='form-control mt-1' />
					</div>
					<div className="col-6">
						<label htmlFor="email">Email</label>
						<input type="email" className='form-control mt-1' />
					</div>
					<div className="col-12">
						<label htmlFor="direccion">Direccion de entrega</label>
						<input type="text" className='form-control mt-1' />
					</div>
					<div className="col-4">
						<label htmlFor="pais">Pais</label>
						<input type="text" className='form-control mt-1'/>
					</div>
					<div className="col-4">
						<label htmlFor="estado">Estado</label>
						<input type="text" className='form-control mt-1' />
					</div>
					<div className="col-4">
						<label htmlFor="ciudad">Ciudad</label>
						<input type="text" className='form-control mt-1'/>
					</div>
					<div className="col-4">
						<label htmlFor="apto">Apto</label>
						<input type="text" className='form-control mt-1'/>
					</div>
					<div className="col-4">
						<label htmlFor="codigoPostal">Codigo postal</label>
						<input type="number" className='form-control mt-1'/>
					</div>
					<div className="col-12">
						<label htmlFor="telefono">Telefono</label>
						<input type="number" className='form-control mt-1'/>
					</div>
				</form>
				<div className="d-flex justify-content-between mt-1">
					<button className='btn btn-primary'>Regresar</button>
					<button className='btn btn-success'>Pagar</button>
				</div>
			</div>
			<div className="col-4">
				<h5>Pedido</h5>
				<div className="row">
					<p className="col-8 align-self-start fw-bold">ITEM name</p>
					<p className="col-4 align-self-end">$10</p>

				</div>
			</div>
		</div>
	)
}

export default Information
