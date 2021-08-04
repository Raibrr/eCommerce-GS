import categories from "../categories"
import CategoryImage from "../components/categories/CategoryImage";
import { categoryInterface } from "../interfaces/categoriesInterface";

const Categories = () => {
	return (
		<div className='row px-4'>
			{categories.map((cat: categoryInterface) => (
				<CategoryImage image={cat.categoryImage} alt={cat.categoryName} title={cat.categoryName} url={cat.categoryURL}/>
			))}
		</div>
	)
}

export default Categories
