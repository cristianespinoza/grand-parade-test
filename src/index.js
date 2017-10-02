import { task } from './modules/task';

// unique object
const object1 = { lastModified: new Date('2017-09-01 00:00:00') };

// task says objects have to be compared by reference, 
// so two objects can have the same date but are still different objects
const object2 = { lastModified: new Date('2017-08-06 00:00:00') };
const object3 = { lastModified: new Date('2017-08-06 00:00:00') };

const sampleData1 = [object1, object2, object3, { lastModified: new Date('2015-01-20 00:00:00') }];
const sampleData2 = [{ lastModified: new Date('2015-01-21 00:00:00') }, object2, object1];
const sampleData3 = [object3, { lastModified: new Date('1985-06-04 00:00:00') }];


document.addEventListener('DOMContentLoaded', () => {
	// call our function
	const response = task(sampleData1, sampleData2, sampleData3);

	// print results to screen
	document.getElementById('function-input--formatted').innerHTML = (`
// unique object
const object1 = { lastModified: new Date('2017-09-01 00:00:00') };

// task says objects have to be compared by reference, 
// so two objects can have the same date but are still different objects
const object2 = { lastModified: new Date('2017-08-06 00:00:00') };
const object3 = { lastModified: new Date('2017-08-06 00:00:00') };

const sampleData1 = [object1, object2, object3, { lastModified: new Date('2015-01-20 00:00:00') }];
const sampleData2 = [{ lastModified: new Date('2015-01-21 00:00:00') }, object2, object1];
const sampleData3 = [object3, { lastModified: new Date('1985-06-04 00:00:00') }];
	`);
	document.getElementById('function-response--formatted').innerHTML = JSON.stringify(response, null, '\t');
});
