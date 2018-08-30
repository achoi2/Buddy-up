const router = require('express').Router();
const passport = require('passport');

// auth with meetup account
router.get('/meetup', passport.authenticate('meetup'));
// handle failure / success after auth attempt
router.get('/meetup/redirect', 
    passport.authenticate('meetup', { failureRedirect: '/login' }),
    function(req, res) {
        // Successul authentication, redirect home.
        res.send('Login successful!')
    }
);

module.exports = router;