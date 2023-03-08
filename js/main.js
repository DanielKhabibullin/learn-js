'use strict';

const input = document.querySelector('input');
console.log('input: ', input);
const paragraph = document.querySelector('p');
const writeText = () => {
	input.addEventListener('blur', () => {
		const text = input.value;
		setTimeout(() => {
			paragraph.textContent = text;
		}, 300);
	});
};
writeText();
