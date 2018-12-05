const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const string_square = require('./string_square').string_square

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/square', (req, res) => {
    var mystring = req.query.string; //per prendere il valore del parametro string in un url del tipo .../square?string=mystring
    //console.log(mystring);
    var strsquare = string_square(mystring);
    //console.log(strsquare);
    var result = {result: strsquare};
    res.json(result);
})

app.listen(PORT, () => console.log('Example app listening on port' + PORT))