// returns index at which to insert the next element
const findNextPositionSorted = (arr, oneObject, field) => {
	let returnIndex = 0;
	arr.every((currentValue, index) => {
		returnIndex = index;
		return (!(oneObject === currentValue || oneObject[field] < currentValue[field]));
	});
	return returnIndex;
};

export { findNextPositionSorted };
