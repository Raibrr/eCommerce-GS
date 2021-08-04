import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProductsPerCategory from '../components/categories/ProductsPerCategory';
import Layout from '../components/Layout';
import Categories from '../containers/Categories';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import SingleCategory from '../containers/SingleCategory';
import Success from '../containers/Success';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import './styles.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
				<div className='margin-container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/categorias' component={Categories} />
						<Route exact path='/single' component={ProductsPerCategory} />
						<Route exact path='/checkout' component={Checkout} />
						<Route exact path='/checkout/information' component={Information} />
						<Route exact path='/checkout/payment' component={Payment} />
						<Route exact path='/checkout/success' component={Success} />
						<Route component={NotFound} />
					</Switch>
				</div>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
