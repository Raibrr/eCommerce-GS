import selectQtyInterface from "../interfaces/selectQtyInterface";

const SelectQty = ({productName, stock, handleChange, qtyOnCart } : selectQtyInterface)=> {
	let iterableElement: number[] = [];
		for (let i = 1; i <= stock; i++) {
			iterableElement.push(i);
		};
		return (
			<select
				className="form-select form-select-sm"
				name={productName}
				onChange={handleChange}
				defaultValue={qtyOnCart}
			>
				{iterableElement.map((item, i) =>
					<option key={i} value={item}>{item}</option>
				)}
			</select>
		);
		
};

export default SelectQty;
