import floresImage from '../src/images/testFlowersModifi.jpg';
import teddyPicture from '../src/images/teddyPicture.jpg';
import graduationsPicture from '../src/images/graduationsPicture.jpg';


const categories = [
	{
		id: 1,
		categoryName: 'Flores Artificiales',
		categoryURL: 'flores',
		categoryImage: floresImage,
		subCategories: [
			{	
				id:1,
				subCategoryName: 'Tulipanes',
				subCategotyURL: '/flores/tulipanes',
			},
			{	
				id:2,
				subCategoryName: 'Girasoles',
				subCategotyURL: '/flores/girasoles',
			},
			{	
				id:3,
				subCategoryName: 'Ortencias',
				subCategotyURL: '/flores/ortencias',
			}
		],
	},
	{
		id: 2,
		categoryName: 'Peluches',
		categoryURL: '/peluches',
		categoryImage: teddyPicture,
		subCategories: [
			{
				id: 4,
				subCategoryName: 'Marinos',
				subCategotyURL: '/peluches/marinos',
			},
			{
				id: 5,
				subCategoryName: 'Selva',
				subCategotyURL: '/peluches/selva',
			},
			{
				id: 6,
				subCategoryName: 'Dinosaurios',
				subCategotyURL: '/peluches/dinosaurios',
			}
		],
	},
	{
		id: 3,
		categoryName: 'Graduaciones',
		categoryURL: '/graduaciones',
		categoryImage: graduationsPicture,
		subCategories: [
			{
				id: 7,
				subCategoryName: 'Peluches Graduados',
				subCategotyURL: '/graduaciones/peluches-graduados',
			},
			{
				id: 8,
				subCategoryName: 'Globos',
				subCategotyURL: '/graduaciones/globos',
			},
			{
				id: 9,
				subCategoryName: 'Detalles',
				subCategotyURL: '/graduaciones/detalles',
			}
		],
	}
];

export default categories;