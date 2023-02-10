'use strict';

const allStudents = ['Ivanov', 'Petrov', 'Sidorov', 'Kuznetsov', 'Smirnov', 'Popov', 'Sokolov']
const failedStudents = ['Sidorov', 'Smirnov', 'Popov']

const filter1 = (arrA, arrB) => arrA
.filter(el_A => !arrB.includes(el_A));

console.log(filter1(allStudents, failedStudents));

const filter = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		if (!(arr2.includes(arr1[i]))) {
			result.push(arr1[i])
		}
	}
	return result;
};
console.log('filter: ', filter(allStudents, failedStudents));

// ?? filter2 doesn't work
const filter2 = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] !== arr2[j]) {
				result.push(arr1[i]);
			}
		}
	}
	return result;
};
console.log('filter2: ', filter2(allStudents, failedStudents));