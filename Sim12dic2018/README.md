# SwEng2-ExamSim
Software Engineering 2 @ UniTN Exam Simulation - December, 5th 2018

## Setup npm
Type the following lines in terminal:
```npm init
npm install express --save
npm install node-fetch --save
```
## How to run the project
Open two terminal windows. In the first one launch `node api.js` While in the second one launch `node client.js`

## About client.js
You can change the rectangle dimensions using the variables `b` and `h`. You can also play with wrong urls by commenting or uncommenting the `params` variable.

## Note about testing with Jest
From terminal, run `npm install --save-dev jest` in your folder. 
Then you have to add the following lines in `package.json`:
```"scripts":
{
    "test":"jest"
}
```
Also add these lines to activate coverage into your `package.json`:
```"jest": {
    "verbose": true,
    "collectCoverage": true
},
```
Now you're able to run the test by typing `npm test`
