const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/workshop');
//const Task = require('./models/taskModel');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// conectamos la base de datos
//onst db = mongoose.connect('mongodb://127.0.0.1:27017/app');
//const db = mongoose.connect('mongodb://localhost/workshop1');
const client = require('./models/client');
const rol = require('./models/rol');



app.get('/api/clients',function(req, res){
    client.find(function(err, clients){
        if(err){
            res.send(err); 
       }
       res.json(clients);
    });
});

app.post('/api/clients',function(req, res){
    var c = new client();
    c.firstName = req.body.firstName;
    c.lastName = req.body.lastName;

    c.save(function(err){
        if(err) {
            res.send(err);
        }
        res.status(201);
        res.json(c);
    });
});

app.get('/api/roles',function(req, res){
    rol.find(function(err, roles){
        if(err){
            res.send(err); 
       }
       res.json(roles);
    });
});

app.post('/api/roles',function(req, res){
    var r = new rol();
    r.rolName = req.body.rolName;
    r.description = req.body.description;

    r.save(function(err){
        if(err) {
            res.send(err);
        }
        res.status(201);
        res.json(r);
    });
});

app.listen(3000);
console.log('running...................');

