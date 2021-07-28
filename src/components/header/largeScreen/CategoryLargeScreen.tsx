
import subCategoriesInterface from "../../../interfaces/subCategoriesInterface";
import CustomLink from "../../atoms/CustomLink";
import SubMenuCategories from "../../molecules/SubMenuCategories";

interface categoyLgInterface {
	srcImage?: string,
	categoryName: string,
	subCategories: Array<subCategoriesInterface>
}

const CategoryLargeScreen = ({ srcImage, categoryName, subCategories } : categoyLgInterface) => { 
	return (
		<div className="menu-items-measures me-3">
			{srcImage && (
				<img
					src={srcImage}
					alt="Flores"
					className="menu-items-measures-img position-relative start-0 mb-3"
				/>
			)}
			<CustomLink
				linkName={categoryName}
				route={"/" + categoryName.toLowerCase()}
				bootstrapClass={"h5 pb-3 border-2 border-bottom d-block"}
				extraClass="pargraph-link"
			/>
			<SubMenuCategories bootstrapClass="d-inline-flex flex-column mb-4">
				{subCategories.map((subCat: subCategoriesInterface) => (
					<CustomLink
						linkName={subCat.subCategoryName}
						route={subCat.subCategotyURL}
						bootstrapClass={"fs-6 fw-bold"}
					/>
				))}
			</SubMenuCategories>
		</div>
	);
	
};

export default CategoryLargeScreen