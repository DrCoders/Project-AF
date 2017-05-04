/**
 * Created by Nirmal on 5/4/2017.
 */
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)



mongoose.connect('localhost:27017/afproject');

app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride());

// define model =================
var Prescription = mongoose.model('Prescription', {
    date: String,
    prescriptions: [{
        title: String,
        doctor: String,
        time: String,
        content: String
    }]
});

//get all prescriptions
app.get('/api/prescriptions',function (req,res) {
    Prescription.find(function (err,prescriptions) {
        if (err){
            res.send(err);
        }
        res.json(prescriptions);
    })
})

//create a prescription and send back all todos after creation
app.post('/api/prescriptions',function (req,res) {
    Prescription.create({
        date : req.body.date,
        prescriptions: [{
            title: req.body.title,
            doctor: req.body.doctorname,
            time: req.body.time,
            content: req.body.details
        }],
        done:false
    })
})


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");