const express = require('express');
const persons = require('./data/person.json')
const app = express();

app.get('/', function (req, res) {
    res.send(persons);
});

app.get('/person/:id/:userdata', function(req, res){
    const data1 = persons[req.params.id];
    if(!data1)
    {
        res.status(404).send("user not found");
    }
    const data2 = data1[req.params.userdata];
    console.log(data2);
    
    if(data2)
    {
        res.send(data2+ "");
    }
    else{
        res.status(404).send("data not found");
    }
});

app.get('/person/:id', function (req, res) {
    const data = persons[req.params.id];
    if (data) {
        res.send(data);
    } else {
        res.status(404).send("Id not found");
    }
});



app.listen(8001, function() {
    console.log('Server started');
})