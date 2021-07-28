import SectionMenu from "../../molecules/SectionMenu";
import MobileSubMenu from "./MobileSubMenu";
import categories from "../../../categories";
import { categoryInterface } from "../../../interfaces/categoriesInterface";
import RibbonAndCups from "../../RibbonAndCups";

const MobileDropdownMenu = () => {
  return (
    <div
      className="vw-100 d-lg-none position-fixed bg-white overflow-scroll"
      style={{ zIndex: 999, height: `calc(100vh - 80px)` }}
    >
      <div className="pb-5 mb-4">
        <div className="my-3 py-3 px-3 border-top border-bottom border-dark border-2">
          <span>
            <i className="far fa-user fa-md"> Login</i>
          </span>
        </div>
        <section className="py-1 ms-2">
          <SectionMenu
            bootstrapClass="ms-2 pt-1"
            route="/categorias"
            sectionName="Categorias"
          />
          <div className="ms-2 ps-1 border-start border-2">
            {categories.slice(0, 3).map((cat: categoryInterface) => (
              <MobileSubMenu
                subMenuName={cat.categoryName}
                subCategories={cat.subCategories}
                subMenuRoute={cat.categoryURL}
                key={cat.id}
              />
            ))}
            <SectionMenu
              bootstrapClass="fw-bold my-1"
              route="/categorias"
              sectionName="Ver Todas las categorias"
            />
          </div>
          <SectionMenu
            bootstrapClass="ms-2 pt-1"
            route="/novedades"
            sectionName="News"
          />
          <SectionMenu
            bootstrapClass="ms-2 pt-1"
            route="/temporada"
            sectionName="Temporadas"
          />
          <SectionMenu
            bootstrapClass="ms-2 pt-1"
            route="/historia"
            sectionName="Sobre Nosotros"
          />
        </section>
        <div className="d-flex my-3">
          <RibbonAndCups/>
        </div>
        <div className="ms-3">
          <p className="fw-bold my-0">Ponte en contacto:</p>
          <span>
            <i className="fab fa-facebook-square fa-2x"/>
          </span>
        </div>
        <span className="d-flex align-items-center mt-5 ms-3">
          <i className="far fa-copyright me-1"/>
          <p className="mb-0 fw-bold" style={{ fontSize: "10px" }}>
            {" "}
            Gift Shop. 2021. Todos los derechos reservados.
          </p>
        </span>
      </div>
    </div>
  );
};

export default MobileDropdownMenu
