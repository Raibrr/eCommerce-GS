import { useRef } from "react";

const SelectQty = ({productName, stock, handleChange, qtyOnCart } : {productName: string, stock : number, handleChange: any, qtyOnCart?:number})=> {
	let iterableElement: number[] = [];
		for (let i = 1; i <= stock; i++) {
			iterableElement.push(i);
		};
	return (
			<select className="form-select form-select-sm" name={productName} onChange={handleChange}>
				{
					iterableElement.map((item, i) => item === qtyOnCart ? 
						<option key={i} defaultValue={item} selected>{qtyOnCart}</option>
						:<option key={i} value={item}>{item}</option>)
				}
			</select>
	);
};

export default SelectQty;
