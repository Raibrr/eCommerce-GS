import hero from '../../images/hero.jpg';
import ContentHero from './ContentHero';
import './heroStyles.css';
import MobileButtonHero from './mobile/MobileButtonHero';

const Hero = () => {
	return (
		<div className="position-relative">
			<div className="hero-content">
				<img src={hero} alt="hero" className="h-100 w-100 hero-image" />
			</div>
			{/* //*In SM screens the display is none */}
			<ContentHero
				bootstrapClass="col-lg-7 d-none d-md-block position-absolute"
				extraClass="hero-lgscreen"
				titleClass="content-hero-title-lg"
				paraClass="content-hero-paragraph-lg"
				buttonClass="content-hero-button-lg"
			/>
			{/* //*In LG screens the display is none */}
			<MobileButtonHero/>
		</div>
	);
	
}

export default Hero
