
import Products from '../components/Products';
import useChangeLightMode from '../hooks/useChangeLightMode';


const Home = () => {
	return (
		<div className={`container ${useChangeLightMode('Home')}`}>
			<Products/>
		</div>
	)
}

export default Home
