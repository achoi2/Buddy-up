// require .env config file (API keys)
require('dotenv').config();
const passport = require('passport');
// initialize meetup strategy for passport
const MeetupStrategy = require('passport-meetup-oauth2').Strategy;
const db = require('./database');
let callbackURL = 'http://ec2-18-191-243-243.us-east-2.compute.amazonaws.com/auth/meetup/redirect';

let getMeetupProfile = (accessToken) => {
    let url = 'https://api.meetup.com/members/self'
    return fetch(url,
        {headers: new Headers(
            {"Authorization": "Bearer " + accessToken}
        )}
    )
    .then(res => {
        return res.json();
    })
};

let storeMeetupProfile = (id, accessToken) => {
    db.query(`UPDATE users SET access_token = $1
    WHERE meetup_id = '$2';`, [accessToken, id]
    )}

// configure strategy
var registerMeetupStrategy = () => {
    passport.use(
        new MeetupStrategy({
            // options for the meetup strategy
            callbackURL: callbackURL,
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        }, (accessToken, refreshToken, profile, done) => {
            // passport callback function
            console.log(`Access Token: ${accessToken}`);
            getMeetupProfile(accessToken)
            .then(profile => {
                console.log(profile);
                return storeMeetupProfile(profile.id, accessToken)
            })
            .then(data => {
                return done(null, profile);
            });
        })
    );
}
// export strategy
module.exports = registerMeetupStrategy;