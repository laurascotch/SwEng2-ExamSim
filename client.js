const fetch = require("node-fetch");
const url = "https://se2-exam-sim-dec2018.herokuapp.com/square"

const getsquare = async url => {

    try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log(error);
    }
};

var mystring = ''
getsquare(url+"?string="+mystring);    