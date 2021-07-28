const useIterationsNumber = (numberOfIterations: number) => {
	let iterationArray: number[] = []; 
	for(let i = 0; i < numberOfIterations; i++ ) {
		console.log('el for')
		iterationArray = [...iterationArray, i]
	}

	return iterationArray
}

export default useIterationsNumber;