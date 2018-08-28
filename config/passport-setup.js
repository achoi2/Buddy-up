const passport = require('passport');
const MeetupStrategy = require('passport-oauth2-meetup').Strategy;
const keys = require('./keys');

passport.use(
    new MeetupStrategy({
        // options for the meetup strategy
        callbackURL: '/auth/meetup/redirect',
        clientID: keys.meetup.clientID,
        clientSecret: keys.meetup.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        return done(null, profile)
    })
);