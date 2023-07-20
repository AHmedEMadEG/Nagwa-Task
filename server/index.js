const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// Parse JSON bodies
app.use(bodyParser.json());

// DOTENV config
const envPath = process.env.NODE_ENV || '';
require('dotenv').config({path: `${envPath}.env`});


// CORS middleware
app.use(cors());


// routes
require('./routes/words.routes')(app);
require('./routes/rank.routes')(app);


// starting the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));