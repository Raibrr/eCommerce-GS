export interface  imgInterface {
	id: number,
	urlImage: string
}

export interface carouselImagesInterface {
	flowersCarousel: Array<imgInterface>,
	teddiesCarousel: Array<imgInterface>,
	graduationsCarousel: Array<imgInterface>
}