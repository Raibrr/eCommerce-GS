import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import appContextInterface from "../interfaces/appContextInterface";
import useChangeLightMode from "../hooks/useChangeLightMode";
//images
import giftShop from '../images/logoGS.svg';
import ribbonDetalles from '../images/ribbonDetallesQueEncantan.svg';

const Header = () => {
  const floresLink = 'https://scontent.fclq1-1.fna.fbcdn.net/v/t1.6435-9/217426941_1057389451459447_1890566747084249277_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFa9m6LLDOlgoPmzzJQXc7i9q74pKkA8uj2rvikqQDy6DJDRk5_-SbK931OAIjxk46rliuLzSbQhS7Y0oq0EHac&_nc_ohc=k4M73NEgZBsAX_SFxzD&_nc_ht=scontent.fclq1-1.fna&oh=da5d6e62d765114ff5c5e191662074f9&oe=60F9147A'
  const peluchesLink = 'https://scontent.fclq1-1.fna.fbcdn.net/v/t1.6435-9/149699941_964404164091310_2538619521081539785_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHRRytYsKUIem5pmhw8kQLRiR5a5KqSIfiJHlrkqpIh-Eo8AIBgSSPFn_JQDPPMK1uNQY9HhPyqCpHio3HCJ6gV&_nc_ohc=bCx03vgivngAX_uGq_z&_nc_ht=scontent.fclq1-1.fna&oh=62562865c5b23564d5b12ae7c6ed23ec&oe=60F91E48';
  const graduaciones = 'https://scontent.fclq1-1.fna.fbcdn.net/v/t1.6435-9/209618446_1048656612332731_758700277692259085_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHSiHiX3RBqUZotgDlWTihWhB2mkRlSmpaEHaaRGVKallW7y_d5YMkDKs6C85y95afKK0TbpBl-4JeTOKUOlpOf&_nc_ohc=C8GCZY8CViIAX-Gn5_j&_nc_ht=scontent.fclq1-1.fna&oh=87d4d20033e4570cdd81e6c7eb13aca7&oe=60F93729';
  const { state: { lightMode } } : appContextInterface = useContext(AppContext);
	const bgHeader = lightMode === true ? {backgroundColor: '#41464b'} : undefined;
  const [navlistOn, setNavListOn] = useState<boolean>(false);
  const [highlightPara, setHighlightPara] = useState<boolean>(false);
  let paragraphStyleColor = highlightPara
  ? {color: '#77388c', borderBottomColor: '#77388c', boorderBottomWidth: '2px'}
  : {color: '#000000', borderBottomColor: 'white', boorderBottomWidth: '2px'};
  let positon = navlistOn ? 'position-fixed' : 'position-static';
  const handleHighlight = () => {
    setHighlightPara(!highlightPara);

  };
  console.log(highlightPara)
	return (
    <div className={`mb-1 position-fixed w-100`} style={{ zIndex: 500}}>
      <div className='position-fixed top-0 start-50 translate-middle-x d-none d-lg-block' style={{zIndex: 1000}}>
        {/* Gift shop image */}
        <Link to="/">
            <img 
                src={giftShop} 
                alt="Gift Shop" 
                /* className='h-100' */
                style={{height: "150px", width: '150px'}}
              />
          </Link>
      </div>
      <div className='position-fixed top-0 start-50 translate-middle-x d-lg-none d-block' style={{zIndex: 1000}}>
        {/* Gift shop image */}
        <Link to="/">
            <img 
                src={giftShop} 
                alt="Gift Shop" 
                /* className='h-100' */
                style={{height: "120px", width: '120px'}}
              />
          </Link>
      </div>
      <nav
        className={`navbar-expand-lg shadow-sm ${useChangeLightMode("Header")}`}
        style={{...bgHeader, height: "85px"}}
      >
        <div className="row h-100 w-100">
          <div className="col-lg-1 flex-fill offset-lg-2 d-none d-lg-block mt-5">
            <div className="menu-item">
              <Link to='/' className='text-decoration-none text-reset h5 pargraph-link'>
                Categorias
              </Link>
            <div className="vw-100 start-0 position-fixed bg-white menu-item-content mt-2" style={{zIndex: 100, height: `calc(100vh - 80px)`}}>
              <div className='d-flex pt-5 px-5 mt-3 mx-auto justify-content-center'>
                <div className='menu-items-measures me-4'>
                  <img src={floresLink} alt="Flores" className='menu-items-measures-img mb-3'/>
                  <Link to='/' className='text-decoration-none text-reset h5 pargraph-link'>
                    Flores Artificiales
                  </Link>
                </div>
                <div className='menu-items-measures me-5'>
                  <img src={peluchesLink} alt="Flores" className='menu-items-measures-img mb-3'/>
                  <Link to='/' className='text-decoration-none text-reset h5 pargraph-link pb-3 border-2 border-bottom d-block'>
                    Peluches
                  </Link>
                  <div className="d-inline-flex flex-column mb-4" style={{}}>
                    <Link to='/' className='text-decoration-none text-reset fs-6 fw-bold' >Tulipanes</Link>
                    <Link  to='/' className='text-decoration-none text-reset fs-6 fw-bold'>Girasoles</Link>
                    <Link to='/' className='text-decoration-none text-reset fs-6 fw-bold'>Ortencias</Link>
                  </div>
                </div>
                <div className='menu-items-measures'>
                  <img src={graduaciones} alt="Flores" className='menu-items-measures-img mb-3'/>
                  <Link to='/' className='text-decoration-none text-reset h5 pargraph-link'>
                    Graduaciones
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-lg-1 flex-fill d-none d-lg-block mt-5  ms-5">
            <h5>News</h5>
          </div>
          <div className="col-lg-1 flex-fill offset-lg-1 d-none d-lg-block mt-5 ">
            <h5>Temporada</h5>
          </div>
          <div className="col-lg-1 flex-fill d-none d-lg-block mt-5 ">
            <h5>Historia</h5>
          </div>
          <div className="col-lg-1 mt-5 flex-fill d-none d-lg-block">
            <span>
              <i className='fas fa-user fa-lg mx-1'/>
              <i className='fas fa-search fa-lg mx-1'/>
              <i className='fas fa-shopping-cart fa-lg mx-1'/>
            </span>
          </div>
          <div className="col-12 d-lg-none d-block">
            <div className="row justify-content-between align-items-center vw-100 mt-4" style={{height: '50px'}}>
              <div className='col-6 col-sm-2'>
                <button
                  className='btn btn-link text-reset'
                  onClick={() => setNavListOn(!navlistOn)}
                >
                  <span>
                    <i className="fas fa-bars fa-lg"/>
                  </span>
                </button>
              </div>
              <div className="col-3 col-sm-2">
                <i className="fas fa-search fa-lg me-2"></i>
                <i className="fas fa-shopping-cart fa-lg" />
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none d-block">
            { navlistOn && (
              <div className='position-absolute bg-white w-100 overflow-auto pb-5 mb-4' style={{zIndex: 2, height: `calc(100vh - 80px)`}}>
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
                <span className='d-flex align-items-center mt-5 ms-3'>
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
