import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import appContextInterface from "../interfaces/appContextInterface";
import Switch from 'react-switch'
import useChangeLightMode from "../hooks/useChangeLightMode";
import HandleSumTotal from "../utils/HandleSumTotal";
import CommandEnum from "../enums/commandEnum";

const Header = () => {
	const { state: { lightMode }, setLighttMode } : appContextInterface = useContext(AppContext);
	const bgHeader = lightMode === true ? {backgroundColor: '#41464b'} : undefined;
	return (
    <div className='mb-1'>
      <nav
        className={`nav nav-pills nav-justified navbar-expand-sm shadow-sm ${useChangeLightMode("Header")}`}
        style={bgHeader}
      >
        <div className="container">
          <div className="row align-items-center ">
						{/* Gift shop image */}
            <div className="col-3 col-sm-2">
              <Link to="/" className="text-decoration-none text-reset">
                <i className="fas fa-gift fa-2x" style={{ color: "green" }} />
                <p className="fw-bold">GS</p>
              </Link>
            </div>
            <div className="col-3 col-sm-2">Categoris</div>
						{/*Cart icon and nummber of products in cart */}
            <div className="col-3 col-sm-2">
              <Link to="/checkout" className="position-relative">
                <span
                  className="position-absolute top-0 start-50 translate-middle fa-inverse ms-1"
                  style={{ fontWeight: 600 }}
                >
                  {" "}
                  {HandleSumTotal(CommandEnum["totalQty"])}
                </span>
                <i className="fas fa-shopping-cart fa-2x" />
              </Link>
            </div>
						{/*End */}
						{/* Dropdown list displayed when breakpoint equals sm */}
            <div className="col-2 col-sm-1">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i className="fas fa-bars"></i>
                </span>
              </button>
            </div>
            <div className="col-12 col-sm-5 px-0">
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav">
                  <li className="nav-item mx-3 py-1">
                    <Switch
                      checked={lightMode}
                      onChange={() => setLighttMode(lightMode)}
                      height={26}
                      width={52}
                      onColor={"#888"}
                      uncheckedIcon={
                        <div className="align-item-center px-1">
                          <i
                            className="fas fa-sun"
                            style={{ color: "yellow" }}
                          ></i>
                        </div>
                      }
                      checkedIcon={
                        <div className="align-item-center px-1">
                          <i
                            className="far fa-moon"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      }
                    />
                  </li>
                  <li className="nav-item mx-3 py-1">
                    <button
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                  </li>
                  <li className="nav-item mx-3 py-1">Go some</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
