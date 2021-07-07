import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import appContextInterface from "../interfaces/appContextInterface";
import productInterface from "../interfaces/ProductsInterface";
import inputsInterface from "../interfaces/inputsInterface";


/*
	VALIDATE FORM WITH JOI
*/
const Information = () => {
	const { state: { cart, buyer}, addBuyer } : appContextInterface = useContext(AppContext)
	const { register, handleSubmit, formState: { errors } } = useForm<inputsInterface>();
	const history = useHistory();
	const onSubmit: SubmitHandler<inputsInterface> = (data) => {
		addBuyer(data);
		console.log(buyer)
		history.push('/checkout/payment');
	}
	return (
		<div className="row">
			<div className="col-8">
				<h4>Informacion de contacto</h4>
				<form className='row' onSubmit={handleSubmit(onSubmit)}>
					<div className="col-6">
						<label>Nombre completo</label>
						<input className='form-control' {...register('fullName', {
							required: true, minLength: {value: 2, message: 'Nombre mayor a 2 caracteres'}})} 
						/>
						{errors.fullName?.type === 'required' && 'Campo requerido'}
						{errors.fullName?.type === 'minLength' && errors.fullName.message}
					</div>
					<div className="col-6">
						<label htmlFor="email">Email</label>
						<input className='form-control'{...register('email', { required: true})} />
						{errors.email?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-12">
						<label htmlFor="direccion" className='fw-bold'>Colonia, fraccionamiento, etc</label>
						<input className='form-control' { ...register('suburb', { required: true})} />
						{errors.suburb?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-12">
						<label htmlFor="direccion" className='fw-bold'>Direccion de la calle</label>
						<input className='form-control' { ...register('direction', { required: true})} />
						{errors.direction?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-4">
						<label htmlFor="pais">Pais</label>
						<input className='form-control' { ...register('country', { required: true})}/>
						{errors.country?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-4">
						<label htmlFor="estado">Estado</label>
						<input className='form-control' {...register('state', { required: true})} />
						{errors.state?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-4">
						<label htmlFor="ciudad">Ciudad</label>
						<input className='form-control' {...register('city', { required: true})}/>
						{errors.city?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-4">
						<label htmlFor="apto">Apto</label>
						<input className='form-control' {...register('apto', { required: true})}/>
						{errors.apto?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-4">
						<label htmlFor="codigoPostal">Codigo postal</label>
						<input className='form-control' {...register('cp', { required: true})}/>
						{errors.cp?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}

					</div>
					<div className="col-6">
						<label htmlFor="telefono">Telefono</label>
						<input className='form-control' {...register('phone', { 
							required: true, 
							pattern: {value: /^[0-9]/g, message: 'Solo se aceptan numeros'},
							maxLength: { value: 10, message: 'Numero maximo 10 caracteres'}
							})}
						/>
						{errors.phone?.type === 'pattern' && errors.phone.message}
						{errors.phone?.type === 'maxLength' && errors.phone.message}
						{errors.phone?.type === 'required' && <div className="badge bg-danger text-wrap">Campo requerido</div>}
					</div>
					<div className="col-12">
						<label htmlFor="referencias">Referencias</label>
						<input className='form-control' {...register('ref')} placeholder='Opcional'/>
					</div>
					<div className="row justify-content-center">
						{
								cart.length > 0 ? (
									<button className="btn btn-success ms-4 mt-2" type="submit">
										Pagar
									</button>
								) : (
									<button className="btn btn-primary ms-4 mt-2" type="submit">
										Agregar direccion
									</button>
								)
						}
					</div>
				</form>
			</div>

			{/* FORM END */}

			<div className="col-4">
				<div className="row">
				<h5 className='px-0'>Pedido</h5>
					{
						cart.length > 0 ? (
							<div className='row px-0'>
								{cart.map((item: productInterface) => (
									<div key={item.id}>
										<p className="col-5 fw-bold">{item.title}</p>
										<p className="col-1">${item.price}</p>
										<p className="col-5 mx-2">{`Cantidad: ${item.qtyOnCart}`}</p>
									</div>
								))}
								<div className="col-12">
									<Link to='/checkout'>
										<button className="btn btn-primary btn-sm">Modificar</button>
									</Link>
								</div>
							</div>
						) : (
							<div className="row">
								<p className="col-12">Sin articulos...</p>
								<Link to='/'>
									<button className="btn btn-success col-12">Ir a tienda</button>
								</Link>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Information
