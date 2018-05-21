const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Data = require('../models/data');
mongoose.Promise = global.Promise;
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient
// var db;
const PORT = process.env.PORT || 3000;


const Data = mongoose.model('data');

//mongoose.connect(keys.mongoURI);


// MongoClient.connect('mongodb://localhost:3000/Lablist', function (err, database) {
//   if(err)
//     throw err;
//   else {
//     db = database;
//     console.log("connected to MongoDB");
//     app.listen(PORT);
//   }
// });

// mongoose.connect('mongodb://localhost:3000');
//

before((done) => {
	mongoose.connect('mongodb://localhost/data_test');
	mongoose.connection
	.once('open', () => { done(); })
	.on('error', (error) => {
		console.warn('Error', error);
	});
});

beforeEach((done) => {
	mongoose.connection.collections.data.drop(() => {
		done();
	});
});

app.post('/LabList/saveData', (req, res) => {
	console.log(req.body);
	console.log(res.body);
});

// app.get('/start', (req, res) => {
//   db.collection('data').insert(req.body, function(err, result) {
//     if (err)
//          res.send('Error');
//       else
//         res.send('Success');
//   });
// });
