import { useContext } from "react";
import AppContext from '../context/AppContext';
import appContextInterface from '../interfaces/appContextInterface';

const useChangeLightMode = (reqComponent: string) => {
	const { state: { lightMode } } = useContext<appContextInterface>(AppContext);
	let backGround;
	switch (reqComponent) {
		case 'Header':
			backGround = lightMode ? "text-white" : "bg-light text-dark";
			break;
		case 'Products':
			backGround= lightMode ? "bg-dark text-white border-2 border-light " : "bg-light text-dark";
			break;
		default: backGround= lightMode ? "bg-dark text-white" : "bg-light text-dark";
			break;
	}
	return backGround;
};

export default useChangeLightMode;