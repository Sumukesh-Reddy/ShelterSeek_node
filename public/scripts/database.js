// database.js
const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database (or open it if it already exists)
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Connected to the SQLite database.');
        // Create users table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            accountType TEXT NOT NULL,
            isAdmin BOOLEAN DEFAULT FALSE,
            createdAt TEXT NOT NULL
        )`);
    }
});

module.exports = db;