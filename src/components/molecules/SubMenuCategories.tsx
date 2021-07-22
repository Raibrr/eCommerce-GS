
const SubMenuCategories = ({ children, bootstrapClass }: { children: any, bootstrapClass: string}) => {
	return (
		<div className={`${bootstrapClass}`} >
			{children}
		</div>
	)
};

export default SubMenuCategories
