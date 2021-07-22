const Icon = ({iconName, iconSize}: { iconName: string, iconSize: string}) => {
	return (
		<i className={`fas ${iconName} ${iconSize} mx-1`}/>
	)
}

export default Icon
