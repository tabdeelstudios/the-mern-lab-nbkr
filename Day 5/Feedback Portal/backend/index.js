require('dotenv').config();

const { CourseModel } = require('./models/CourseModel');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

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

// app.get('/addCourses', async (req, res) => {
//     let tempCourses = [
//         {
//             "title": "Web Development Bootcamp",
//             "price": "$199",
//             "duration": "12 weeks",
//             "category": "Technology",
//             "courseImg": "Link to Image 1",
//             "feedback": []
//         },
//         {
//             "title": "Digital Marketing Mastery",
//             "price": "$149",
//             "duration": "8 weeks",
//             "category": "Marketing",
//             "courseImg": "Link to Image 2",
//             "feedback": []
//         },
//         {
//             "title": "Data Science Fundamentals",
//             "price": "$249",
//             "duration": "10 weeks",
//             "category": "Data Science",
//             "courseImg": "Link to Image 3",
//             "feedback": []
//         },
//         {
//             "title": "Graphic Design Essentials",
//             "price": "$129",
//             "duration": "6 weeks",
//             "category": "Design",
//             "courseImg": "Link to Image 4",
//             "feedback": []
//         },
//         {
//             "title": "Mobile App Development Workshop",
//             "price": "$179",
//             "duration": "8 weeks",
//             "category": "Technology",
//             "courseImg": "Link to Image 5",
//             "feedback": []
//         },
//         {
//             "title": "Business Analytics for Beginners",
//             "price": "$159",
//             "duration": "9 weeks",
//             "category": "Business",
//             "courseImg": "Link to Image 6",
//             "feedback": []
//         },
//         {
//             "title": "Photography Masterclass",
//             "price": "$129",
//             "duration": "6 weeks",
//             "category": "Arts",
//             "courseImg": "Link to Image 7",
//             "feedback": []
//         },
//         {
//             "title": "Cybersecurity Essentials",
//             "price": "$219",
//             "duration": "10 weeks",
//             "category": "Technology",
//             "courseImg": "Link to Image 8",
//             "feedback": []
//         },
//         {
//             "title": "Content Writing Workshop",
//             "price": "$139",
//             "duration": "7 weeks",
//             "category": "Writing",
//             "courseImg": "Link to Image 9",
//             "feedback": []
//         },
//         {
//             "title": "Introduction to AI and Machine Learning",
//             "price": "$199",
//             "duration": "12 weeks",
//             "category": "Technology",
//             "courseImg": "Link to Image 10",
//             "feedback": []
//         }
//     ];

//     tempCourses.forEach((course) => {
//         let newCourse = new CourseModel({
//             title: course.title,
//             price: course.price,
//             duration: course.duration,
//             courseImg: course.courseImg,
//             category: course.category,
//             feedback: course.feedback
//         });
//         newCourse.save();
//     });
//     res.send("Done!");
// });

app.listen(PORT, () => {
    console.log("App is running...");
    mongoose.connect(uri);
});