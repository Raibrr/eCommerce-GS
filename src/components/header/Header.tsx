//React
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import appContextInterface from "../../interfaces/appContextInterface";
//Hooks
import useDropdownMenuAction from "../../hooks/useDropdownMenuAction";
import useChangeLightMode from "../../hooks/useChangeLightMode";


//Components
import GiftShopLogo from "../GiftShopLogo";
import Icon from "../atoms/Icon";
import CustomLink from "../atoms/CustomLink";
import SectionMenu from "../molecules/SectionMenu";
import MobileDropdownMenu from "./mobile/MobileDropdownMenu";
import MobileMenuIcons from "./mobile/MobileMenuIcons";
import LargeDropdownMenu from "./largeScreen/LargeDropdownMenu";

const Header = () => {
  const { state: { lightMode } } : appContextInterface = useContext(AppContext);
  const { isDropdownMenuActive, handlerDropdownMenu} = useDropdownMenuAction();
	const bgHeader = lightMode === true ? {backgroundColor: '#41464b'} : undefined;
  
	return (
    <div className={`mb-1 position-fixed w-100`} style={{ zIndex: 500 }}>
      <GiftShopLogo display="d-lg-none d-block" height="120px" width="120px" />
      <GiftShopLogo display="d-none d-lg-block" height="150px" width="150px" />
      <nav
        className={`navbar-expand-lg shadow-sm ${useChangeLightMode("Header")}`}
        style={{ ...bgHeader, height: "85px" }}
      >
        <div className="d-inline-flex align-items-center h-100 w-100">
          <div className="d-none d-lg-flex flex-row-reverse w-100 menu-large-screen-left">
            <SectionMenu
              bootstrapClass="pb-5 mt-5"
              extraClass="container-link-menu"
              route="/novedades"
              sectionName="News"
            />
  
            <div
              className="pb-5 mt-5 container-link-menu"
              onMouseEnter={handlerDropdownMenu}
              onMouseLeave={handlerDropdownMenu}
            >
              <CustomLink
                bootstrapClass="h5"
                linkName="Categorias"
                route="/categorias"
                extraClass={isDropdownMenuActive ? "link-active" : "pargraph-link"}
              />
            </div>
          </div>
          <div className="d-none d-lg-flex w-100 menu-large-screen-right">
            <SectionMenu
              bootstrapClass=""
              extraClass="container-link-menu"
              route="/temporada"
              sectionName="Temporada"
            />
            <SectionMenu
              bootstrapClass=""
              extraClass="container-link-menu"
              route="/historia"
              sectionName="Historia"
            />
          </div>
          <div className="d-none d-lg-block position-absolute end-0 me-5">
            <span>
              <Icon iconName="fa-user" iconSize="fa-lg" />
              <Icon iconName="fa-search" iconSize="fa-lg" />
              <Icon iconName="fa-shopping-cart" iconSize="fa-lg" />
            </span>
          </div>
          <MobileMenuIcons bootstrapClass='d-lg-none d-block' handler={handlerDropdownMenu}/>
        </div>
      </nav>
      {isDropdownMenuActive && (
        <LargeDropdownMenu handler={handlerDropdownMenu} dropdownMenuState={isDropdownMenuActive}/>
      )}
      {isDropdownMenuActive && <MobileDropdownMenu />}
    </div>
  );
}

export default Header
