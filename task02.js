'use strict';

const string = prompt('Enter some sentense')?.trim();
const stringNormalize = string => (string != '' && typeof str !== 'undefined') ? string[0].toUpperCase() 
+ string.toLowerCase().slice(1) : alert('Please, enter correct data');

const newString = stringNormalize(string);
console.log('result: ', newString);
