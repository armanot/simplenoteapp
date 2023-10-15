const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('notes.db');
app.use(express.static('public'));

app.use(express.json());

db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, title TEXT, content TEXT)');

app.get('/notes', (req, res) => {
    console.log('ttt2');
    db.all('SELECT * FROM notes', (err, rows) => {
        if (err) {
            console.log('ttt-error');
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error..'});
        } else {
            console.log('ttt-rows');
            res.json(rows);
        }
    });

    app.post('/notes', (req,res) => {
        console.log("insert..");
        const { title, content } = req.body;
        db.run('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], (err) =>{
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.status(201).json({ message: ' Note added sucessfully' });
            
            }
            });
        });
       
});






app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});