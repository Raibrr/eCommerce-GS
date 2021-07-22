import { Link } from "react-router-dom";
const CustomLink = ({linkName, route, bootstrapClass, extraClass }: {linkName: string,bootstrapClass: string, extraClass?: string , route: string}) => {
	const customClass: string = extraClass ? `${extraClass}` : '';
	return (
		<Link to={route} className={`text-decoration-none ${bootstrapClass} ${customClass}`} style={{color: 'black'}}>
			{linkName}
		</Link>
	)
}

export default CustomLink
