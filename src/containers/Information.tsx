import { useForm, SubmitHandler } from "react-hook-form";

type  Inputs = {
	fullName: string,
	email: string,
	direction: string,
	country: string,
	state: string,
	city: string,
	apto: string,
	cp: string,
	phone: string,
}

/*


					Ver si validar la info con joi desde el form es usado y correcto


*/
const Information = () => {
const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<div className="row">
			<div className="col-8 align-self-start">
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
						<label htmlFor="direccion">Direccion de entrega</label>
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
					<div className="col-12">
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
					<button className='btn btn-success' type='submit'>Pagar</button>
				</form>
				<div className="d-flex justify-content-between mt-1">
					<button className='btn btn-primary'>Regresar</button>
					
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
