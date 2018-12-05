const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const string_square = require('./string_square').string_square

app.get('/', (req, res) => res.send('Usage:\n url/square?string=mystring calculates the square of mystring length'))

app.get('/square', (req, res) => {
    if(req.query.string || req.query.string==''){
        var mystring = req.query.string; //per prendere il valore del parametro string in un url del tipo .../square?string=mystring
        //console.log(mystring);
        var strsquare = string_square(mystring);
        //console.log(strsquare);
        var result = {result: strsquare};
        res.json(result);
        res.status(200);
    }else{
        strsquare = string_square(mystring);
        var result = {result: strsquare};
        res.json(result);
        res.status(200);
    }
})

app.listen(PORT, () => console.log('Example app listening on port' + PORT))