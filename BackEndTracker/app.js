const express = require('express');
var cors = require('cors')
const sequelize = require('./util/database');
const userRoutes = require('./routes/user')
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());

app.use(express.json()); 

app.use('/user', userRoutes)

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
