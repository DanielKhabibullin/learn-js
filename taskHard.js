'use strict';

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];
// for (let i of allСashbox) {
//   for (let j of i) {
//     console.log(j);
//   }
// }
const getAveragePriceGoods = (arr) => {

	let result = 0;
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += ( arr[i][1] / arr[i][0]);
		console.log('sum: ', sum);
	}
	return result = sum / arr.length;
};

console.log(getAveragePriceGoods(allСashbox));

// const getAveragePriceGoods1 = (arr) => {

// 	let result = 0;
// 	let sum = 0;
// 	arr.forEach((count) => {
// 		count.forEach((price) => {
		
// 			});
// 	});
// 	return result = sum / arr.length;
// };

// console.log(getAveragePriceGoods1(allСashbox));
