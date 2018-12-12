const app = require('./api').app
const fetch = require("node-fetch")
const url = "http://localhost:3000/"
const string_square = require('./string_square').string_square

var stringa_valida1 = 'ciao';
var stringa_valida2 = '';
var stringa_nv1 = 2;
var stringa_nv2 = null;

test('test stringa valida', () => {
	expect(string_square(stringa_valida1)).toBe(16);
});

test('test stringa vuota', () => {
	expect(string_square(stringa_valida2)).toBe(0);
});

test('test stringa null', () => {
	expect(string_square(stringa_nv1)).toBe(-1);
});

test('test undefined', () => {
	expect(string_square(stringa_nv2)).toBe(-1);
});