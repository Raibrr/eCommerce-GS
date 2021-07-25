import { Link } from 'react-router-dom';
import './heroStyles.css';

const ContentHero = ({extraClass, position}: {extraClass?: string, position: string}) => {
	const customClass = extraClass ? extraClass: '';
	return (
		<div className={`${position} col-lg-6 ${customClass}`} style={{ zIndex: 91 }}>
			<div className="d-flex flex-column">
				<h4 className="content-hero-title ">
					Este detalle <br /> no se lo espera
				</h4>
				<p className="fs-5 fw-bold text-white content-hero-paragraph">
					Graduacion, boda, cumpleaños... <br />
					Para todo tenemos, sorprende con un regalo especial para culaquier
					ocacion, le va encantar
				</p>
				<Link to="/top-regalos" className="content-hero-button">
					Top Regalos
				</Link>
			</div>
		</div>
	);
	
};

export default ContentHero
