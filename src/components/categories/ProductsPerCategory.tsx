import carouselImages from "../../carouseImages"
import SingleCategory from "../../containers/SingleCategory"
import productInterface from "../../interfaces/ProductsInterface";

const ProductsPerCategory = () => {
	return (
		<SingleCategory>
			{
				carouselImages.flowersCarousel.map((item: any) => (
					<div className='col-4'>
						<img src={item.urlImage} alt={item.title} />
						<p>{item.title}</p>
						<p>{item.price}</p>
					</div>
				))
			}
		</SingleCategory>
	)
}

export default ProductsPerCategory
