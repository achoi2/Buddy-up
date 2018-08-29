require('dotenv').config();
const passport = require('passport');
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;

var registerMeetupStrategy = () => {
    passport.use(
        new MeetupStrategy({
            // options for the meetup strategy
            callbackURL: 'http://ec2-18-191-243-243.us-east-2.compute.amazonaws.com/auth/meetup/redirect',
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }, (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log(accessToken);
            return done(null, profile);
        })
    );
}

module.exports = registerMeetupStrategy;