const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./server/config/mongoose.config');
app.use(cors());
//REQUIRED FOR CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ADD ALL ROUTES HERE
require('./server/routes/product.routes')(app);
//THIS SHOULD BE LAST
app.listen(port, () => console.log(`Listening on port: ${port}`) );

