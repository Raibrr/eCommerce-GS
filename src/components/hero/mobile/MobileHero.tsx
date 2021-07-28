import '../heroStyles.css';
const MobileHero = ({ bootstrapClass } : { bootstrapClass: string }) => {
	return (
		<div className={`${bootstrapClass} flex-column pt-5 px-3`}>
				<h4 className={`fs-2 hero-title-mobile`}>
					Este detalle no se lo espera
				</h4>
				<p className={` fs-5 hero-paragraph-mobile`}>
					Graduacion, boda, cumpleaños...
					Para todo tenemos, sorprende con un regalo especial, le va encantar
				</p>
			</div>
	)
}

export default MobileHero
