import productInterface from "./ProductsInterface";

export interface  imgInterface {
	id: number,
	urlImage: string
}

export interface carouselImagesInterface {
	flowersCarousel: Array<productInterface>,
	teddiesCarousel: Array<productInterface>,
	graduationsCarousel: Array<productInterface>
}