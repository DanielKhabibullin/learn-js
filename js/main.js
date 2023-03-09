'use strict';

const createElement = () => {
	const container = document.querySelector('.container');
	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.classList.add('input');
	container.append(input);
	const paragraph = document.createElement('p');
	paragraph.classList.add('paragraph');
	container.append(paragraph);
	return {input, paragraph};
};
createElement();

const input = document.querySelector('.input');
const paragraph = document.querySelector('p');
let timerId = null;
input.addEventListener('input', () => {
	const text = input.value;
	clearTimeout(timerId);
	timerId = setTimeout(() => {
		paragraph.textContent = text;
	}, 300);
});
