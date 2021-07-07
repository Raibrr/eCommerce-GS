//Context
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import appContextInterface from '../interfaces/appContextInterface';

//Custom Hooks
import useAddress from '../hooks/useAddress';

import Map from '../components/Map'

/* *********
Este component deve de ser una ruta protegida, Solo se renderiza en caso de tener una direccion guardada
************* */
const Success = () => {
	const { state : { buyer } } = useContext<appContextInterface>(AppContext);
	const { apto, direction, state, country, city, suburb } = buyer[0]
	const position = useAddress(`${apto} ${direction}, ${state}, ${country}`);
	console.log(position)
  return (
		<div className="row">
			<h4 className='col-12'>El pedido llegara al la siguiente direccion</h4>
			<p>{`${direction} #${apto}, ${suburb}, ${city}, ${state}`}</p>
			{
				typeof position === 'object' && <Map position={position}/>
			}
		</div>
  );
};


export default Success
