
import CarouselSection from '../components/carousel/CarouselSection';
import Hero from '../components/hero/Hero';
import MobileHero from '../components/hero/mobile/MobileHero';
import Products from '../components/Products';
import useChangeLightMode from '../hooks/useChangeLightMode';


const Home = () => {
  return (
    <div className={`${useChangeLightMode("Home")}`} style={{ marginTop: "85px !important" }} >
      <MobileHero bootstrapClass="d-flex d-md-none" />
      <Hero />
      <CarouselSection />
      {/* <Products/> */}
    </div>
  );
};


export default Home
