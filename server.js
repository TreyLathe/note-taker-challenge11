
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // Import uuid

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

let notes = [];
const dbFilePath = path.join(__dirname, 'db', 'db.json');


// API endpoint to get all notes
app.get('/api/notes', (req, res) => {
    fs.readFile(dbFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        notes = JSON.parse(data);
        res.json(notes);
    });
});

// API endpoint to create a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFile(dbFilePath, JSON.stringify(notes), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(newNote);
    });
});

// Serve the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

// let notes = [];

// app.post('/api/notes', (req, res) => {
//     let newNote = req.body;
//     newNote.id = uuidv4(); // Assign a unique ID to the note
//     notes.push(newNote);
//     fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes)); // Write the notes to db.json
//     res.json(newNote);
// });

// //GET /notes should return the notes.html file.
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });

// //GET * should return the index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// //GET /api/notes should read the db.json file and return all saved notes as JSON.
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, 'db.json'));
// });



// app.listen(PORT), () => {
//     console.log(`App listening on PORT ${PORT}`);
// }