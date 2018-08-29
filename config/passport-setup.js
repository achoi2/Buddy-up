require('dotenv').config();
const passport = require('passport');
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;
// let {meetup, meetupToken} = require('./keys');

passport.use(
    new MeetupStrategy({
        // options for the meetup strategy
        callbackURL: 'http://localhost:3000/auth/meetup/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        meetupToken = accessToken;
        console.log(accessToken, meetupToken);
        return done(null, profile);
    })
);