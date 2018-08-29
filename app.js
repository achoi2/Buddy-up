const express = require('express');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const isoFetch = require('isomorphic-fetch');

const app = express();

// setup view engine
app.set('view engine', 'ejs');

// passport initialize + session
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

// fetch user profile from Meetup API
fetch(
    'https://api.meetup.com/members/self', 
    {headers: new Headers(
        {"Authorization": "Bearer b81eb53e6febf5a1cdf3487314faffae"}
    )}
)
.then(res => {
    return res.json();
})
.then(data => {
    console.log(JSON.stringify(data));
});

// app runs on port 3000
app.listen(3000, () =>
    console.log('buddy-up is running on port 3000!')
);