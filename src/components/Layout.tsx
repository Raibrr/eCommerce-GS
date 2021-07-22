import Header from './header/Header';
import Footer from './Footer';
import useChangeLightMode from '../hooks/useChangeLightMode';

const Layout = ({ children } : { children: any }) => {
	return (
		<div className={`${useChangeLightMode('Layout')}`}>
			<Header />

			{children}

			<Footer />
		</div>
	)
};

export default Layout
