import subCategoriesInterface from "../../../interfaces/subCategoriesInterface";
import CustomLink from "../../atoms/CustomLink";
import SubMenuCategories from "../../molecules/SubMenuCategories";

const MobileSubMenu = ({subMenuName, subCategories , subMenuRoute}: { subMenuName: string, subCategories: Array<subCategoriesInterface>, subMenuRoute: string}) => {
	return (
		<>
			<CustomLink linkName={subMenuName} bootstrapClass='fw-bold fs-5' extraClass='ribbon-color' route={subMenuRoute}/>
			<SubMenuCategories bootstrapClass='ms-4 my-1 d-flex flex-column'>
				{subCategories.map((subCat: subCategoriesInterface) => (
					<CustomLink
						bootstrapClass="fs-6 fw-bold"
						linkName={subCat.subCategoryName}
						route={subCat.subCategotyURL}
						key={subCat.id}
					/>
				))}
			</SubMenuCategories>
		</>
	)
};

export default MobileSubMenu
