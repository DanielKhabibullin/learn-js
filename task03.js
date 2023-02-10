'use strict';
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
	
	let newArr = [];
	for (const elem in arr) {
			newArr[elem] = `${prefix} ${arr[elem]}`;
		}
		// for (let i = 0; i < arr.length; i += 1) {
		// 	newArr[i] = `${prefix} ${arr[i]}`;
		// }
	return newArr;
}

console.log('addPrefix: ', addPrefix(names, 'Mr'));
