import CustomLink from '../atoms/CustomLink';

interface sectonMenuInterface {
	bootstrapClass: string,
	extraClass?: string,
	route: string,
	sectionName: string
}

const SectionMenu = ({bootstrapClass, extraClass, route, sectionName} : sectonMenuInterface) => {
	const customClass = extraClass ? extraClass: '';
	return (
		<div className={`${bootstrapClass} ${customClass}`}>
			<CustomLink
				linkName={sectionName}
				route={route}
				bootstrapClass="h5"
				extraClass="pargraph-link"
			/>
		</div>
	);
	
};

export default SectionMenu
