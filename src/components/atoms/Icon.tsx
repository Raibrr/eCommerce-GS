interface iconInterface {
	iconName: string,
	iconSize: string
}

const Icon = ({iconName, iconSize}: iconInterface) => {
	return (
		<i className={`fas ${iconName} ${iconSize} mx-1`}/>
	)
}

export default Icon
