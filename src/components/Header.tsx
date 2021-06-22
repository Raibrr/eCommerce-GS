import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='row'>
			<div className="col-9">
				<Link to='/'className='text-decoration-none'>PlatziConf Merch</Link>
			</div>
			<div className="col-3">
				<Link to='/checkout'><i className='fas fa-shopping-basket fa-lg'/></Link>
			</div>
		</div>
	)
}

export default Header
