// polyfill for using fetch on the backend
require('isomorphic-fetch');
// initialize an express app
const app = require('express')();
const passport = require('passport');
const authRoutes = require('./scripts/auth-routes');
const registerMeetupStrategy = require('./scripts/passport-setup');
// initialize http server for express app
const http = require('http').Server(app);

// initiliaze passport session
registerMeetupStrategy();
app.use(passport.initialize());
app.use(passport.session());
// serialize user
passport.serializeUser(function(user, done) {
    done(null, user);
});
// deserialize user
passport.deserializeUser(function(user, done) {
    done(null, user);
});

// auth routes
app.use('/auth', authRoutes);
// home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
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
http.listen(3000, () =>
    console.log('buddy-up is running on port 3000!')
);