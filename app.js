// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const notes = [];

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    notes.push({ title, content });
    res.status(201).json({ message: 'Note added successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
