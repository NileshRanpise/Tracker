const express = require('express');
var cors = require('cors')
const sequelize = require('./util/database');
const userRoutes = require('./routes/user')
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/users');
const Expense = require('./models/expenses');

app.use(cors());

app.use(express.json()); 

app.use('/user', userRoutes)

User.hasMany(Expense);
Expense.belongsTo(User);

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
