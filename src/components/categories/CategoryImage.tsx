import { useState } from "react";
import { Link } from "react-router-dom"
import './styles.css'

const CategoryImage = ({image, alt, title, url }: { image: any, alt: string, title: string, url:string}) => {
	const [isMouseOver, setisMouseOver] = useState<boolean>(false);
	const handleMouseOver = () => {
		setisMouseOver(currValue => !currValue);
	};
	console.log(isMouseOver)
	const extraClass = isMouseOver ? 'hover': 'no-hover';
	return (
		<div className='col-6 mt-4 position-relative' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
			<Link to={url}>
				<img src={image} alt={alt} className='h-100 w-100'/>
				<div className={`${extraClass}`}>
					<h1 className='hover-title pargraph-link d-inline-flex'>{title}</h1>
				</div>
			</Link>
		</div>
	)
}

export default CategoryImage
