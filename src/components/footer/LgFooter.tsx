import { Link } from "react-router-dom";
import giftShop from "../../images/logoGS.svg";
import './footerStyles.css';

const LgFooter = () => {
	return (
		<div className='footer-container text-white'>
			<div className="footer-logo-wrapper col-3">
				<Link to="/">
					<img className="w-100 h-100" src={giftShop} alt="Gift Shop" />
				</Link>
			</div>
				<div className="d-flex row justify-content-center">
					<h5 className='col-5 col-lg-4'>Cuenta + Ordenes</h5>
					<div className='col-5'>
						<p className="fw-bold my-0 ">Ponte en contacto:</p>
						<a href='https://www.facebook.com/regalos.gs' target='_blank' rel='noreferrer'>
							<span style={{color: 'white'}}>
								<i className="fab fa-facebook-square fa-2x"/>
							</span>
						</a>
					</div>
					<p className='mb-0 col-10 col-lg-9'>Tu cuenta</p>
					<p className='mb-0 col-10 col-lg-9'>Detalles de compras</p>
					<div className='d-flex justify-content-center col-12 col-md-6'>
						<span className="d-flex align-items-center mt-3 ms-3">
							<i className="far fa-copyright me-1"/>
							<p className="mb-0 fw-bold" style={{ fontSize: "15px" }}>
								{" "}
								Gift Shop. 2021. Todos los derechos reservados.
							</p>
						</span>
					</div>
				</div>
		</div>
	)
}

export default LgFooter
