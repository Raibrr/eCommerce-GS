import ribbonDetalles from '../images/ribbonDetallesQueEncantan.svg';

const RibbonAndCups = () => {
	return (
		<span>
			<i className="fas fa-glass-cheers fa-lg ms-3" />
			<img
				src={ribbonDetalles}
				alt="Detalles que Encantan"
				style={{ width: "186px", height: "45px" }}
			/>
			<i className="fas fa-glass-cheers fa-lg ms-0" />
		</span>
	)
}

export default RibbonAndCups
