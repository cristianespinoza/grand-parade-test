import chai from 'chai';
import { task } from '../modules/task';

describe('Task', function () {
	let object1;
	let object2;
	let object3;
	let sampleData1;
	let sampleData2;
	let sampleData3;
	let sampleData4;
	let expect;

	before(() => {
		expect = chai.expect;
		// unique object
		object1 = { lastModified: new Date('2017-09-01 00:00:00') };

		// task says objects have to be compared by reference, 
		// so two objects can have the same date but are still different objects
		object2 = { lastModified: new Date('2017-08-06 00:00:00') };
		object3 = { lastModified: new Date('2017-08-06 00:00:00') };

		sampleData1 = [object1, object2, object3, { lastModified: new Date('2015-01-20 00:00:00') }];
		sampleData2 = [{ lastModified: new Date('2015-01-21 00:00:00') }, object2, object1];
		sampleData3 = [object3, { lastModified: new Date('1985-06-04 00:00:00') }];
		sampleData4 = [object1, object1];
	});

	it('Should combine the arrays', () => {
		const response = task(sampleData1, sampleData2, sampleData3);
		expect(response).to.have.lengthOf(6);
	});

	it('Should filter out the same object by reference', () => {
		const response = task(sampleData4);
		expect(response).to.have.lengthOf(1);
	});

	it('Should sort dates chronologically', () => {
		const response = task(sampleData2, sampleData3);
		expect(response[0].lastModified.getTime()).to.equal(new Date('1985-06-04 00:00:00').getTime());
	});
});
