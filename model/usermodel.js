const Database = require("better-sqlite3");

const usersDatabase = new Database("usersDatabase.db", {
  verbose: console.log,
});

// Create the table with the updated schema
const createQuery = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    accountType TEXT NOT NULL
)`;
usersDatabase.exec(createQuery);

function insertUser(name, email, password, accountType) {
  try {
      const existingUser = getUserByEmail(email);
      if (existingUser) {
          throw new Error("Email already in use.");
      }
      const query = `INSERT INTO users (name, email, password, accountType) VALUES (?, ?, ?, ?)`;
      const statement = usersDatabase.prepare(query);
      const info = statement.run(name, email, password, accountType);
      return info;
  } catch (err) {
      throw new Error(err.message);
  }
}

function getAllUsers() {
  const query = `SELECT * FROM users`;
  const statement = usersDatabase.prepare(query);
  const users = statement.all();
  return users;
}

function getUserByEmail(email) {
  const query = `SELECT * FROM users WHERE email = ?`;
  const statement = usersDatabase.prepare(query);
  const user = statement.get(email);
  return user;
}

module.exports = { insertUser, getAllUsers, getUserByEmail };
