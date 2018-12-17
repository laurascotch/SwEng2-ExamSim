const fetch = require("node-fetch");
//const url = "https://se2-exam-sim-dec2018.herokuapp.com/square"
const url = "http://localhost:3000/getArea"

const getarea = async url => {

    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        console.log(response.status)
    } catch (error) {
        console.log(error);
    }
};

var b = 2;
var h = 5.2;
var params = '?side1='+b+'&side2='+h;
//var params = '?side1='+b;
//var params = '';
//var params = '?wrongparam='+h;
getarea(url+params);    