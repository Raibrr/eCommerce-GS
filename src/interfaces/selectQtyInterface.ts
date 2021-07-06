export default interface selectQtyInterface {
	productName: string,
	stock: number,
	handleChange: React.ChangeEventHandler<HTMLSelectElement>,
	qtyOnCart?: number,
}