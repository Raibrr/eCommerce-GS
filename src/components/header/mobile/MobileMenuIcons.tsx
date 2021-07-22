
const MobileMenuIcons = ({bootstrapClass, handler}: {bootstrapClass: string, handler: any}) => {
	return (
		<div className={`${bootstrapClass}`}>
			<div
				className="row justify-content-between align-items-center vw-100"
				style={{ height: "50px" }}
			>
				<div className="col-6 col-sm-2">
					<span className="ms-3" onClick={handler}>
						<i className="fas fa-bars fa-lg" />
					</span>
				</div>
				<div className="col-3 col-sm-2">
					<i className="fas fa-search fa-lg me-2"></i>
					<i className="fas fa-shopping-cart fa-lg" />
				</div>
			</div>
		</div>
	);
};

export default MobileMenuIcons
