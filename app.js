require('isomorphic-fetch');
const express = require('express');
const passport = require('passport');
const authRoutes = require('./scripts/auth-routes');
const registerMeetupStrategy = require('./scripts/passport-setup');

const app = express();

// setup view engine
app.set('view engine', 'ejs');

// passport initialize + session
registerMeetupStrategy();
app.use(passport.initialize());
app.use(passport.session());
// passport serialize user
passport.serializeUser(function(user, done) {
    done(null, user);
});
// passport deserialize user
passport.deserializeUser(function(user, done) {
    done(null, user);
});

// setup authentication routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('index')
});

// app runs on port 3000
app.listen(3000, () =>
    console.log('buddy-up is running on port 3000!')
);