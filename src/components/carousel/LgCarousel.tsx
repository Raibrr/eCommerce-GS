import carouselImages from "../../carouseImages"
import useIterationsNumber from "../../hooks/useIterationsNumber";
import CategoryCarousel from "./CategoryCarousel"


const LgCarousel = () => {
	//*En caso de que todos las categorias de carrusel tengan la misma longitud 
	const totalImages = carouselImages.flowersCarousel.length;
	const lgImagesPerCarousel = 3;
	const lgArrayIterations  = useIterationsNumber(Math.ceil(totalImages/lgImagesPerCarousel));
	return (
		<div>
			<CategoryCarousel
          categoryLegend="El mejor regalo para interiores y jardines"
          carouselId="flowers"
          carouselItemsIterations={lgArrayIterations}
          carouselImages={carouselImages.flowersCarousel}
          imagesPerCarousel={lgImagesPerCarousel}
        />
        <CategoryCarousel
          categoryLegend="El mejor regalo para interiores y jardines"
          carouselId="teddies"
          carouselItemsIterations={lgArrayIterations}
          carouselImages={carouselImages.teddiesCarousel}
          imagesPerCarousel={lgImagesPerCarousel}
        />
        <CategoryCarousel
          categoryLegend="El mejor regalo para interiores y jardines"
          carouselId="graduations"
          carouselItemsIterations={lgArrayIterations}
          carouselImages={carouselImages.graduationsCarousel}
          imagesPerCarousel={lgImagesPerCarousel}
        />
		</div>
	)
}

export default LgCarousel
