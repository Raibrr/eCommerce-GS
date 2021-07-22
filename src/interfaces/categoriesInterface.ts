import subCategoriesInterface from "./subCategoriesInterface";

export interface categoryInterface {
		id:number,
		categoryName: string,
		categoryURL: string,
		categoryImage: any,
		subCategories: Array<subCategoriesInterface>,
}



export interface categoriesInterface {
	categories: Array<categoryInterface>
}

