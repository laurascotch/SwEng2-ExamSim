const getArea = require('./area').getArea

// VALIDI
var a1 = [2,3];
var a2 = [0,2];
var a3 = [2,0];
var a4 = [0,0];

// NON VALIDI
var a5 = [-1,2];
var a6 = [-1,-1];
var a7 = [0,-1];
var a8 = [1];
var a9 = [1,2,3];
var a10 = [];
var a11 = null;
var a12 = [2, null];
var a13 = [2,'1'];
var a14 = [3,'asdf'];

test('Computazione lecita', () => {
	expect(getArea(a1)).toBe(6);
});

test('Computazione lecita con zeri - 1', () => {
	expect(getArea(a2)).toBe(0);
});

test('Computazione lecita con zeri - 2', () => {
	expect(getArea(a3)).toBe(0);
});

test('Computazione lecita con zeri - 3', () => {
	expect(getArea(a4)).toBe(0);
});

test('Computazione illecita - Intero negativo 1', () => {
	expect(getArea(a5)).toBe(-1);
});

test('Computazione illecita - Intero negativo 2', () => {
	expect(getArea(a6)).toBe(-1);
});

test('Computazione illecita - Intero negativo 3', () => {
	expect(getArea(a7)).toBe(-1);
});

test('Computazione illecita - Troppo pochi elementi', () => {
	expect(getArea(a8)).toBe(-1);
});

test('Computazione illecita - Troppi elementi', () => {
	expect(getArea(a9)).toBe(-1);
});

test('Computazione illecita - Array vuoto', () => {
	expect(getArea(a10)).toBe(-1);
});

test('Computazione illecita - Parametro null', () => {
	expect(getArea(a11)).toBe(-1);
});

test('Computazione illecita - Chiamata vuota', () => {
	expect(getArea()).toBe(-1);
});

test('Computazione illecita - Un elemento è null', () => {
	expect(getArea(a12)).toBe(-1);
});

test('Computazione illecita - Un elemento è un numero stringa', () => {
	expect(getArea(a13)).toBe(-1);
});

test('Computazione illecita - Un elemento è una stringa', () => {
	expect(getArea(a14)).toBe(-1);
});