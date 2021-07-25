import CarouselTitle from "./CarouselTitle"
import CategoryCarousel from "./CategoryCarousel"
import categories from "../../categories"

const CarouselSection = () => {
  return (
    <div>
      <CarouselTitle />
      <CategoryCarousel
        categoryLegend="El mejor regalo para interiores y jardines"
        carouselImages={categories[0].categoryImage}
        carouselId="flores"
      />
      <CategoryCarousel
        categoryLegend="Los peluches siempre nos recuerdan quien nos quiere"
        carouselImages={categories[1].categoryImage}
        carouselId="peluches"
      />
      <CategoryCarousel
        categoryLegend="Celebra todo su esfuerzo, estamos orgullos..."
        carouselImages={categories[2].categoryImage}
        carouselId="graduaciones"
      />
    </div>
  );
};


export default CarouselSection
