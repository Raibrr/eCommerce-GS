import hero from '../../images/hero.jpg';
import ContentHero from './ContentHero';
import './heroStyles.css';

const Hero = () => {
	return (
		<div className='position-relative'>
			<div className="hero-content">
				<img src={hero} alt="hero"  className='h-100 w-100 hero-image'/>
			</div>
			<ContentHero position='position-absolute' extraClass='hero-lgscreen'/>
		</div>
	)
}

export default Hero
