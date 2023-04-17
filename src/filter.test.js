/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
import {filter} from './filter.js';

describe('фильтр массива объектов', () => {
	const array = [
		{
			id: 12,
			name: 'Name 1',
		},
		{
			id: 22,
			name: 'Name 2',
		},
		{
			id: 43,
			name: 'Name 3',
		},
		{
			id: 222,
			name: 'Name 2',
		},
	];

	it('несколько совпадений', () => {
		const expected = [array[2]];
		const filtered = filter(array, 'name', 'Name 3');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('одно совпадение по string', () => {
		const expected = [array[1], array[3]];
		const filtered = filter(array, 'name', 'Name 2');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('одно совпадение по numbers ', () => {
		const expected = [array[3]];
		const filtered = filter(array, 'id', 222);
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('нет совпадений', () => {
		const expected = [];
		const filtered = filter(array, 'name', 'Name 4');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});
});

describe('фильтр массива объектов', () => {
	const objects = [
		{login: 'Maks', email: 'maks@maks.com', company: 'METHED'},
		{login: 'Methed', email: 'info@methed.ru', company: 'METHED'},
		{login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber'},
	];

	it('несколько совпадений', () => {
		const expected = [objects[0], objects[1]];
		const filtered = filter(objects, 'company', 'METHED');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('одно совпадение по string', () => {
		const expected = [objects[1]];
		const filtered = filter(objects, 'email', 'info@methed.ru');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('нет совпадений', () => {
		const expected = [];
		const filtered = filter(objects, 'login', 'nonexistent');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length);
	});

	it('пустой массив', () => {
		const expected = [];
		const filtered = filter([], 'login', 'Maks');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});

	it('поиск по пустому значению', () => {
		const expected = [];
		const filtered = filter(objects, 'login', '');
		expect(Array.isArray(filtered)).toBe(true);
		expect(filtered.length === expected.length).toBe(true);
		for (const i in filtered) {
			expect(expected[i] === filtered[i]).toBe(true);
		}
	});
});
