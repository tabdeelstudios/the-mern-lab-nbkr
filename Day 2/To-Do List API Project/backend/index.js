const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

var allTasks = [
    { id: 1, title: "Buy milk", status: "complete" },
    { id: 2, title: "Send email", status: "complete" },
    { id: 3, title: "Attend meeting", status: "complete" },
    { id: 4, title: "Plan the day", status: "complete" },
    { id: 5, title: "Watch a movie", status: "complete" },
];

app.get('/', (req, res) => {
    res.json({ "tasks": allTasks });
});

app.post('/addTask', (req, res) => {
    let task = req.body;
    allTasks.push(task);
    res.json({ "message": "Task added succesfully!" })
});

app.listen(port, () => {
    console.log("App is running...");
});


