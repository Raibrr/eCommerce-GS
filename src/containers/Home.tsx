
import CarouselSection from '../components/carousel/CarouselSection';
import Hero from '../components/hero/Hero';
import Products from '../components/Products';
import useChangeLightMode from '../hooks/useChangeLightMode';


const Home = () => {
	return (
		<div className={` ${useChangeLightMode('Home')}`}>
			<Hero/>
			<CarouselSection/>
			{/* <Products/> */}
		</div>
	)
}

export default Home
