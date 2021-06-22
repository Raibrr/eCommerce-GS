import '../styles/components/Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children } : { children: any }) => {
	return (
		<div className='Main'>
			<Header />

			{children}

			<Footer />
		</div>
	)
};

export default Layout
