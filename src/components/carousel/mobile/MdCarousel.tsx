import carouselImages from "../../../carouseImages"
import useIterationsNumber from "../../../hooks/useIterationsNumber";
import CategoryCarousel from "../CategoryCarousel"

const MdCarousel = () => {
	//*En caso de que todos las categorias de carrusel tengan la misma longitud 
	const totalImages = carouselImages.flowersCarousel.length;
	const mdImagesPerCarousel = 2;
	const mdArrayIterations  = useIterationsNumber(Math.ceil(totalImages/mdImagesPerCarousel));
	return (
		<div>
			<CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="mdFlowers"
            carouselItemsIterations={mdArrayIterations}
            carouselImages={carouselImages.flowersCarousel}
            imagesPerCarousel={mdImagesPerCarousel}
          />
          <CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="mdTeddies"
            carouselItemsIterations={mdArrayIterations}
            carouselImages={carouselImages.teddiesCarousel}
            imagesPerCarousel={mdImagesPerCarousel}
          />
          <CategoryCarousel
            categoryLegend="El mejor regalo para interiores y jardines"
            carouselId="mdGraduations"
            carouselItemsIterations={mdArrayIterations}
            carouselImages={carouselImages.graduationsCarousel}
            imagesPerCarousel={mdImagesPerCarousel}
          />
		</div>
	)
}

export default MdCarousel
