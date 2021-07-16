import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import appContextInterface from "../interfaces/appContextInterface";
import useChangeLightMode from "../hooks/useChangeLightMode";
//images
import giftShop from '../images/logoGS.svg';
import ribbonDetalles from '../images/ribbonDetallesQueEncantan.svg';

const Header = () => {
	const { state: { lightMode } } : appContextInterface = useContext(AppContext);
	const bgHeader = lightMode === true ? {backgroundColor: '#41464b'} : undefined;
  const [navlistOn, setNavListOn] = useState<boolean>(false);
  let display = navlistOn ? 'position-fixed' : '';
	return (
    <div className={`mb-1 ${display}`} style={{zIndex: 1}}>
      <nav
        className={`navbar-expand-lg shadow-sm ${useChangeLightMode("Header")}`}
        style={bgHeader}
      >
        <div className="row">
          <div className="col-lg-8 d-none d-lg-block ">
            <div className="d-flex justify-content-evenly align-items-center">
              <div>Categoris</div>
              <div>News</div>
              {/* Gift shop image */}
              <Link to="/" className="h-25 w-25 ps-4">
                <img 
                  src="https://scontent.fclq1-1.fna.fbcdn.net/v/t31.18172-8/19943001_198191774045890_6317138443529477712_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHYW0Ccx7dvY8m393ATQElM17ob69jjPafXuhvr2OM9p0OLgI_ucZ-qG_xfr1X7hvPxXOhPzczCwNjUUqw0jdLi&_nc_ohc=H-tl0n92Ip4AX-xx2a8&_nc_ht=scontent.fclq1-1.fna&oh=405f7231ddc2ea3f8c8d2f055edae7f8&oe=60F3BFA5" 
                  alt="Gift Shop" 
                  className='h-75 w-75'
                />
                {/* <i className="fas fa-gift fa-2x" style={{ color: "green" }} />
                <p className="fw-bold">GS</p> */}
              </Link>
              <div>Temporada</div>
              <div>Sobre Nosotros</div>
            </div>
          </div>
          <div className="col-12 d-lg-none d-block">
            <div className="row justify-content-around align-items-center vw-100">
              <div className='col-3 col-sm-2'>
                <button
                  className='btn btn-link text-reset'
                  onClick={() => setNavListOn(!navlistOn)}
                >
                  <span>
                    <i className="fas fa-bars fa-lg"/>
                  </span>
                </button>
              </div>
              {/* Gift shop image */}
              <div className=' ps-4 col-6 col-sm-4 col-md-3' style={{height: "150px"}}>
                <img 
                  src={giftShop} 
                  alt="Gift Shop" 
                  /* className='h-100' */
                  style={{height: "150px", width: '100%'}}
                />
              </div>
              <div className="col-3 col-sm-2">
                <i className="fas fa-search fa-lg me-2"></i>
                <i className="fas fa-shopping-cart fa-lg" />
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none d-block">
            { navlistOn && (
              <div className='position-absolute bg-white w-100 overflow-auto pb-5 mb-4' style={{zIndex: 2, height: `calc(100vh - 104px)`}}>
                <div className="my-3 py-3 px-3 border-top border-bottom border-dark border-2">
                  <span><i className="far fa-user fa-md"> Login</i></span>
                </div>
                <section className="py-1 ms-2">
                  <h5 className='ms-2 pt-1'>Categorias</h5>
                  <div className='ms-3'>
                    <div>
                      <p className='fw-bold my-1'>Peluches</p>
                      <div className='ms-4 my-1'>
                        <p className='my-1'>Marinos</p>
                        <p className='my-1'>Dinosaurios</p>
                        <p className='my-1'>Ver todos</p>
                      </div>
                    </div>
                    <div>
                      <p className='fw-bold my-1'>Flores Artificiales</p>
                      <div className="ms-4 my-1">
                        <p className="my-1">Tulipanes</p>
                        <p className="my-1">Orquideas</p>
                        <p className="my-1">Ver Todas</p>
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold my-1">Graduaciones</p>
                      <div className="ms-4 my-1">
                        <p className="my-1">Peluches Graduados</p>
                        <p className="my-1">Globos</p>
                        <p className="my-1">Detalles</p>
                      </div>
                    </div>
                    <h5 className="fw-bold">Ver todas las Categorias</h5>
                  </div>
                  <h5 className='ms-2 pt-1'>News</h5>
                  <h5 className='ms-2 pt-1'>Temporada</h5>
                  <h5 className='ms-2 pt-1'>Sobre nosotros</h5>
                </section>
                <div className='d-flex my-3'>
                  <span>
                    <i className="fas fa-glass-cheers fa-lg ms-3"/>
                    <img src={ribbonDetalles} alt="Detalles que Encantan" style={{width: '186px',height: '45px'}}/>
                    <i className="fas fa-glass-cheers fa-lg ms-0"/>
                  </span>
                </div>
                <div className="ms-3">
                  <p className="fw-bold my-0">Ponte en contacto:</p>
                  <span>
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </span>
                </div>
                <span className='d-flex align-items-center my-4 ms-3'>
                  <i className="far fa-copyright me-1"></i>
                  <p className='mb-0 fw-bold' style={{fontSize: '10px'}}> Gift Shop. 2021. Todos los derechos reservados.</p>
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
