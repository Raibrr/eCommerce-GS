import { Link } from "react-router-dom"

const MobileButtonHero = () => {
	return (
		<div className="d-flex d-md-none row">
				<Link to="/top-regalos" className="col-4 hero-button-mobile">
					Ver top regalos
				</Link>
			</div>
	)
}

export default MobileButtonHero
