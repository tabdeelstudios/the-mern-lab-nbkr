require('dotenv').config();

const { CourseModel } = require('./models/CourseModel');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require(cors);
const passport = require(passport);

var session = require('express-session');

const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'keyboard',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    })
);

app.use(passport.initialize());
app.use(passport.session());


//Data API calls
app.get('/courseList', async (req, res) => {
    let allCourses = await CourseModel.find({});
    res.json(allCourses);
});