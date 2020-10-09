import express from 'express';
import bodyParser from 'body-parser';

// import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

const mongoose = require('mongoose');
// https://stackoverflow.com/questions/51862570/mongoose-why-we-make-mongoose-promise-global-promise-when-setting-a-mongoo
mongoose.Promise = global.Promise;
// https://mongoosejs.com/docs/index.html
mongoose.connect('mongodb://localhost/productsdb', {useNewUrlParser: true, useUnifiedTopology: true});
