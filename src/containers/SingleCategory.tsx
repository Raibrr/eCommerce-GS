
const SingleCategory = ({children}: {children:any}) => {
	return (
		<div className='row mt-5'>
			<div className='col-3'>
				<div className="row justify-content-center">
					<p className='col-12'>color</p>
					<p className='col-12'>Tamaño</p>
					<p className='col-12'>Lorem ipsum</p>
				</div>
			</div>
			<div className="col-9">
				<div className="row">
					{children}
				</div>
			</div>
		</div>
	)
}

export default SingleCategory
