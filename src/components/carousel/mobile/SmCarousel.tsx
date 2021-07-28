import carouselImages from "../../../carouseImages"
import useIterationsNumber from "../../../hooks/useIterationsNumber";
import CategoryCarousel from "../CategoryCarousel"

const SmCarousel = () => {
	//*En caso de que todos las categorias de carrusel tengan la misma longitud 
	const totalImages = carouselImages.flowersCarousel.length;
	const smImagesPerCarousel = 1;
  const smArrayIterations  = useIterationsNumber(Math.ceil(totalImages/smImagesPerCarousel));
	return (
		<div>
			<CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="smFlowers"
            carouselItemsIterations={smArrayIterations}
            carouselImages={carouselImages.flowersCarousel}
            imagesPerCarousel={smImagesPerCarousel}
          />
          <CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="smTeddies"
            carouselItemsIterations={smArrayIterations}
            carouselImages={carouselImages.teddiesCarousel}
            imagesPerCarousel={smImagesPerCarousel}
          />
          <CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="smGraduations"
            carouselItemsIterations={smArrayIterations}
            carouselImages={carouselImages.graduationsCarousel}
            imagesPerCarousel={smImagesPerCarousel}
          />
		</div>
	)
}

export default SmCarousel
