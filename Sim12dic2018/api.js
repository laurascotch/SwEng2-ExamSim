const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const getArea = require('./area').getArea

app.get('/', (req, res) => res.send(200, 'Usage:\n url/getArea?side1=3&side2=5 calculates the area of a rectangle with sides equal to 3 and 5'))

app.get('/getArea', (req, res) => {
    if(req.query.side1 && req.query.side2){
        var s1 = req.query.side1;
        var s2 = req.query.side2;
        var substr = '.';
        if(s1.indexOf(substr) == -1){
            var b = parseInt(req.query.side1);
        } else {
            var b = parseFloat(req.query.side1);
        }
        if(s2.indexOf(substr) == -1){
            var h = parseInt(req.query.side2);
        } else {
            var h = parseFloat(req.query.side2);
        }
        //var b = parseInt(req.query.side1);
        //var h = parseInt(req.query.side2);
        var a = [b, h];
        var area = getArea(a);
        console.log(a);
        console.log(area);
        var result = {area: area};
        if(area == -1){
            res.status(400);
        } else {
            res.status(200);
        }
        res.json(result);
    }else{
        var result = {area: -1};
        res.status(400);
        res.json(result);
    }
})

app.listen(PORT, () => console.log('App listening on port' + PORT))