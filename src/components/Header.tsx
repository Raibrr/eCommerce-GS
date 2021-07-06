import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import appContextInterface from "../interfaces/appContextInterface";

const Header = () => {
	const { state: { cart } } : appContextInterface = useContext(AppContext);
	return (
		<div className='row'>
			<div className="col-9">
				<Link to='/'className='text-decoration-none'>PlatziConf Merch</Link>
			</div>
			<div className="col-3">
				<Link to='/checkout'><i className='fas fa-shopping-basket fa-lg'/></Link>
				{cart.length > 0 && <div>{cart.length}</div>}
			</div>
		</div>
	)
}

export default Header
