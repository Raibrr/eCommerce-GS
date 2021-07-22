import CustomLink from '../atoms/CustomLink';

const SectionMenu = ({bootstrapClass, extraClass, route, sectionName} : {bootstrapClass : string, extraClass?: string, route: string, sectionName: string}) => {
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
