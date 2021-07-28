import CarouselTitle from "./CarouselTitle" 
import LgCarousel from "./LgCarousel";
import MdCarousel from "./mobile/MdCarousel";
import SmCarousel from "./mobile/SmCarousel";

const CarouselSection = () => {
  return (
    <div>
      <CarouselTitle />
      <div className="d-none d-lg-block">
        <LgCarousel/>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <MdCarousel/>
      </div>
      <div className="d-block d-md-none">
        <SmCarousel/>
      </div>
    </div>
  );
};


export default CarouselSection
/*<div className="carousel-indicators">
        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0" className="active"  aria-label="Slide 1"></button>
        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */
