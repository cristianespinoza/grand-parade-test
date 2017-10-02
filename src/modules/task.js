import { findNextPositionSorted } from './findNextPositionSorted';

const task = (...arrays) => {
	const response = [];
	// iterate with the arrays given in parameters
	arrays.forEach((oneArray) => {
		// iterate with the objects of these arrays
		oneArray.forEach((oneObject) => {
			// find index at which to insert
			const indexToInsert = findNextPositionSorted(response, oneObject, 'lastModified');

			// if the last item is equal to the current one, we must delete it (splice with param: 1).
			const numberToDelete = (response[indexToInsert] === oneObject) ? 1 : 0;

			// insert the item, deleting the last one if necessary
			response.splice(indexToInsert, numberToDelete, oneObject);
		});
	});
	return response;
};

export { task };
