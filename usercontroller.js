const {
  insertUser,
  getAllUsers,
  getUserByEmail,
} = require("../model/usermodel");

function signUp(req, res) {
  try {
      const { name, email, password, accountType } = req.body;

      // Insert the user
      insertUser(name, email, password, accountType);

      res.status(201).json({
          status: "success",
          message: "User created successfully",
      });
  } catch (err) {
      res.status(400).json({
          status: "fail",
          message: err.message,
      });
  }
}

function getUsers(req, res) {
  try {
      const users = getAllUsers();
      res.status(200).json({
          status: "success",
          data: {
              users,
          },
      });
  } catch (err) {
      res.status(400).json({
          status: "fail",
          message: "Users not found",
          error: err.message,
      });
  }
}
function fetchUserByEmailPassword(req, res) {
  const { email, password } = req.body;
  const user = getUserByEmail(email);

  // Check if the user exists
  if (!user) {
      return res.status(404).json({
          status: "fail",
          message: "User not found",
      });
  }

  // Check if the password matches
  if (user.password !== password) {
      return res.status(401).json({
          status: "fail",
          message: "Invalid password",
      });
  }

  // Log the user object for debugging
  console.log("User found:", user);

  // Return the user data (excluding the password)
  res.status(200).json({
    status: "success",
    data: {
        user: {
            name: user.name,
            email: user.email,
            accountType: user.accountType,
        },
    },
});
}
module.exports = { signUp, getUsers, fetchUserByEmailPassword };