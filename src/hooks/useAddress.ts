import { useEffect, useState } from "react";
import { config } from "dotenv";
import axios from "axios";
import mapCoordinatesInterface from "../interfaces/mapCoordinatesInterface";

const useAddress = (address: any) => {
	config();
	const [map, setMap] = useState<mapCoordinatesInterface>()
	const API = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONTRACK_KEY}&query=${address}`;
	useEffect( () => {
		const fetchPosition = async () => {
			const response = await axios.get(API);
			const { data: { data} } = response;
			console.log(response.data.data)
			setMap({
				lat: data[0].latitude,
				lng: data[0].longitude,
			})
		}
		fetchPosition();
	}, [])

	return map
};

export default useAddress;