import './carouselStyles.css'

const CategoryCarousel = ({categoryLegend, carouselImages, carouselId}: {categoryLegend: string, carouselImages: any, carouselId: string}) => {
	return (
		<div>
			<h3 className='my-5 d-flex justify-content-center carousel-sub-title'>{categoryLegend.toUpperCase()}</h3>
				<div id={carouselId} className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval='false'>
					<div className="carousel-indicators">
						<button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="d-flex justify-content-center">
								<img src={carouselImages} className="me-3 w-25" alt="..."/>
								<img src={carouselImages} className="mx-5 w-25" alt="..."/>
								<img src={carouselImages} className="ms-3 w-25" alt="..."/>
							</div>
						</div>
						<div className="carousel-item">
							<div className="d-flex justify-content-center">
								<img src={carouselImages} className="me-3 w-25" alt="..."/>
								<img src={carouselImages} className="mx-5 w-25" alt="..."/>
								<img src={carouselImages} className="ms-3 w-25" alt="..."/>
							</div>
						</div>
						<div className="carousel-item">
							<div className="d-flex justify-content-center">
								<img src={carouselImages} className="me-3 w-25" alt="..."/>
								<img src={carouselImages} className="mx-5 w-25" alt="..."/>
								<img src={carouselImages} className="ms-3 w-25" alt="..."/>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev d-flex reverse-flex-rowjustify-content-start carousel-button" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next justify-content-start carousel-button" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
	)
}

export default CategoryCarousel
