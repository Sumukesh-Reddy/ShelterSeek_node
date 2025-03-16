const express = require('express');
const path = require('path');
const { signUp, fetchUserByEmailPassword, getUsers } = require('./controller/usercontroller');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/city_houses', (req, res) => {
    res.render('city_houses');
});

app.get('/history', (req, res) => {
    res.render('history');
});

app.get('/messages', (req, res) => {
    res.render('messages');
});

app.get('/message', (req, res) => {
    res.render('message');
});

app.get('/payment', (req, res) => {
    res.render('payment');
});

app.get('/room_layout', (req, res) => {
    res.render('room_layout');
});

app.get('/wishlist', (req, res) => {
    res.render('wishlist');
});

app.get('/loginweb', (req, res) => {
    res.render('loginweb');
});

app.post('/loginweb', (req, res) => {
    if (req.body.type === 'signIn'){
        fetchUserByEmailPassword(req, res);
    } else  if (req.body.type ==='signUp'){
        signUp(req, res);
    } else {
        res.status(400).json({
            status: "Fail",
            message: "Please Specify Request type (signIn, signUp)"
        })
    }
});

app.get('/users', getUsers);

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/privacypolicy', (req, res) => {
    res.render('privacypolicy');
});

app.get('/host_index', (req, res) => {
    res.render('host_index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});