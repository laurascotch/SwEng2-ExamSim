const app = require('./api').app
const fetch = require("node-fetch")
const url = "http://localhost:3000/"

/*
beforeAll(function () {
  server = require('./api.js');
});

afterAll(function () {
  server.close();
});
*/

test('base test', () => {
	expect(true).toBe(true);
});



test('testing GET \'/\' ', () => {
	expect.assertions(1);
    return fetch(url)
        .then(r => expect(r.status).toEqual(200))
});

test('testing correct GET \'/getArea?side1=3&side2=5\' ', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3&side2=5")
        .then(r => expect(r.status).toEqual(200))
});

test('testing wrong GET \'/getArea?side1=3\' - Parameter missing', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea?side1=3&sode2=5\' - Parameter mispelled', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3&sode2=5")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea\' - No parameter', () => {
	expect.assertions(1);
    return fetch(url+"getArea")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea?side1=3&side2=-5\' - Wrong param value', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3&side2=-5")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea?side1=3.2&side2=5\' - Wrong param type', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3.2&side2=5")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea?side1=3&side2=5.2\' - Wrong param type', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3&side2=5.2")
        .then(r => expect(r.status).toEqual(400))
});

test('testing wrong GET \'/getArea?side1=3&side2=\' - Parameter null', () => {
	expect.assertions(1);
    return fetch(url+"getArea?side1=3&side2=")
        .then(r => expect(r.status).toEqual(400))
});