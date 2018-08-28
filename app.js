const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();
// setup view engine
app.set('view engine', 'ejs');

// setup routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () =>
    console.log('buddy-up is running on port 3000!')
);