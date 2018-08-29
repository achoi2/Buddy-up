const passport = require('passport');
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;
let {meetup, meetupToken} = require('./keys');

passport.use(
    new MeetupStrategy({
        // options for the meetup strategy
        callbackURL: 'http://localhost:3000/auth/meetup/redirect',
        clientID: meetup.clientID,
        clientSecret: meetup.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        meetupToken = accessToken
        console.log(meetupToken, accessToken);
        return done(null, profile);
    })
);