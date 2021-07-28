import { Link } from 'react-router-dom';
import './heroStyles.css';

interface contentHeroInterface {
	extraClass?: string,
	bootstrapClass: string,
	titleClass : string,
	paraClass : string,
	buttonClass : string
}
const ContentHero = ({extraClass, bootstrapClass, titleClass, paraClass, buttonClass}: contentHeroInterface) => {
	const customClass = extraClass ? extraClass: '';
	return (
		<div className={`${bootstrapClass} ${customClass}`} style={{ zIndex: 91 }}>
			<div className="d-flex flex-column">
				<h4 className={`col-6 fs-1 ${titleClass}`}>
					Este detalle no se lo espera
				</h4>
				<p className={`fw-bold ${paraClass}`}>
					Graduacion, boda, cumpleaños...
					<br />
					Para todo tenemos, sorprende con un regalo especial para culaquier
					ocacion, le va encantar
				</p>
				<Link to="/top-regalos" className={`col-3 ${buttonClass}`}>
					Top Regalos
				</Link>
			</div>
		</div>
	);
};

export default ContentHero
