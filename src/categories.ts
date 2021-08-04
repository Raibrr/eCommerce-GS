import navFloresImage from '../src/images/testFlowersModifi.jpg';
import navTeddyPicture from '../src/images/teddyPicture.jpg';
import navGraduationsPicture from '../src/images/graduationsPicture.jpg';
import catFloresImage from '../src/images/categories/flowers-edit3.jpg';
import catAlmohadasImage from '../src/images/categories/almohadas-edit3.jpg';
import catGlobosImage from '../src/images/categories/globos-edit3.jpg';
import catGraduationsImage from '../src/images/categories/graduations-edit3.jpg';
import catTeddiesImage from '../src/images/categories/teddies-edit3.jpg';



const categories = [
	{
		id: 1,
		categoryName: 'Flores Artificiales',
		categoryURL: 'categorias/flores',
		categoryImage: catFloresImage,
		navCategoryImage: navFloresImage,
		subCategories: [
			{	
				id:1,
				subCategoryName: 'Tulipanes',
				subCategotyURL: 'categorias/flores/tulipanes',
			},
			{	
				id:2,
				subCategoryName: 'Girasoles',
				subCategotyURL: 'categorias/flores/girasoles',
			},
			{	
				id:3,
				subCategoryName: 'Ortencias',
				subCategotyURL: 'categorias/flores/ortencias',
			}
		],
	},
	{
		id: 2,
		categoryName: 'Peluches',
		categoryURL: 'categorias//peluches',
		categoryImage: catTeddiesImage,
		navCategoryImage: navTeddyPicture,
		subCategories: [
			{
				id: 4,
				subCategoryName: 'Marinos',
				subCategotyURL: 'categorias/peluches/marinos',
			},
			{
				id: 5,
				subCategoryName: 'Selva',
				subCategotyURL: 'categorias/peluches/selva',
			},
			{
				id: 6,
				subCategoryName: 'Dinosaurios',
				subCategotyURL: 'categorias/peluches/dinosaurios',
			}
		],
	},
	{
		id: 3,
		categoryName: 'Graduaciones',
		categoryURL: 'categorias/graduaciones',
		categoryImage: catGraduationsImage,
		navCategoryImage: navGraduationsPicture,
		subCategories: [
			{
				id: 7,
				subCategoryName: 'Peluches Graduados',
				subCategotyURL: 'categorias/graduaciones/peluches-graduados',
			},
			{
				id: 8,
				subCategoryName: 'Globos',
				subCategotyURL: 'categorias/graduaciones/globos',
			},
			{
				id: 9,
				subCategoryName: 'Detalles',
				subCategotyURL: 'categorias/graduaciones/detalles',
			}
		],
	},
	{
		id: 4,
		categoryName: 'Almohadas',
		categoryURL: 'categorias/almohadas',
		categoryImage: catAlmohadasImage,
		subCategories: [
			{
				id: 7,
				subCategoryName: 'Peluches Graduados',
				subCategotyURL: 'categorias/graduaciones/peluches-graduados',
			},
			{
				id: 8,
				subCategoryName: 'Globos',
				subCategotyURL: 'categorias/graduaciones/globos',
			},
			{
				id: 9,
				subCategoryName: 'Detalles',
				subCategotyURL: 'categorias/graduaciones/detalles',
			}
		],
	},
	{
		id: 5,
		categoryName: 'Globos',
		categoryURL: 'categorias/globos',
		categoryImage: catGlobosImage,
		subCategories: [
			{
				id: 7,
				subCategoryName: 'Peluches Graduados',
				subCategotyURL: 'categorias/graduaciones/peluches-graduados',
			},
			{
				id: 8,
				subCategoryName: 'Globos',
				subCategotyURL: 'categorias/graduaciones/globos',
			},
			{
				id: 9,
				subCategoryName: 'Detalles',
				subCategotyURL: 'categorias/graduaciones/detalles',
			}
		],
	},
];

export default categories;