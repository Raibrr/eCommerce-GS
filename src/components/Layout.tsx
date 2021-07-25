import Header from './header/Header';
import Footer from './footer/Footer';
import useChangeLightMode from '../hooks/useChangeLightMode';

const Layout = ({ children } : { children: any }) => {
	return (
		<div className={`${useChangeLightMode('Layout')} d-flex flex-column`}>
			<Header />

			{children}

			<Footer />
		</div>
	)
};

export default Layout
