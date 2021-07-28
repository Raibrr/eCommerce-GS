import { imgInterface } from '../../interfaces/carouselImagesInterface';
import './carouselStyles.css'

interface categoryCarouseInterface {
	categoryLegend : string,
	carouselImages: Array<imgInterface>,
	carouselId: string,
	carouselItemsIterations: number[], 
	imagesPerCarousel: number
}

const CategoryCarousel = (props: categoryCarouseInterface) => {
  const {
    categoryLegend,
    carouselImages,
    carouselId,
    carouselItemsIterations,
    imagesPerCarousel,
  } = props;
  return (
    <div className="pt-4">
      <h3 className="my-5 carousel-sub-title">
        {categoryLegend.toUpperCase()}
      </h3>
      <div
        id={carouselId}
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          {carouselItemsIterations.map((iteration: number) => {
            let start = imagesPerCarousel * iteration;
            let end = imagesPerCarousel * iteration + imagesPerCarousel;
            return (
              <div
                className={
                  iteration === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <div className="d-flex justify-content-evenly carousel-item-image-container">
                  {carouselImages.slice(start, end).map((item: any) => (
                    <img
                      src={item.urlImage}
                      className="carousel-item-image"
                      alt="..."
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="carousel-indicators">
          {carouselItemsIterations.map((iteration: number) => (
            <button
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={`${iteration}`}
              className={iteration === 0 ? "active" : ""}
              aria-label={`Slide ${1}`}
            ></button>
          ))}
        </div>
        <button
          className="carousel-control-prev d-flex reverse-flex-row justify-content-end carousel-button"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next justify-content-start carousel-button"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};


export default CategoryCarousel
