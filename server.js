/**
 * Express server for note-taking application.
 */

const express = require("express"); // Import the Express framework
const path = require("path"); // Import the path module
const fs = require("fs"); // Import the fs module for file system operations
const { v4: uuidv4 } = require("uuid"); // Import the uuid module for generating unique IDs

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3001; // Set the port number for the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // Serve static files from the 'public' directory

let notes = [];
const dbFilePath = path.join(__dirname, "db", "db.json");

// API endpoint to get all notes
app.get("/api/notes", (req, res) => {
    fs.readFile(dbFilePath, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        notes = JSON.parse(data);
        res.json(notes);
    });
});

// API endpoint to create a new note
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFile(dbFilePath, JSON.stringify(notes), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(newNote);
    });
});

// Serve the notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
