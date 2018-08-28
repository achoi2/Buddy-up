const passport = require('passport');
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;
const keys = require('./keys');

passport.use(
    new MeetupStrategy({
        // options for the meetup strategy
        callbackURL: 'http://localhost:3000/auth/meetup/redirect',
        clientID: keys.meetup.clientID,
        clientSecret: keys.meetup.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        return done(null, profile)
    })
);