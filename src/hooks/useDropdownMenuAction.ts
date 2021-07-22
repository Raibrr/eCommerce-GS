import { useState } from "react";

const useDropdownMenuAction = () => {
	const [isDropdownMenuActive, setIsDropdownMenuActive] = useState<boolean>(false);

	const handlerDropdownMenu = () => {
		setIsDropdownMenuActive(currValue => !currValue)
	};

	return { isDropdownMenuActive, handlerDropdownMenu}
};

export default useDropdownMenuAction;