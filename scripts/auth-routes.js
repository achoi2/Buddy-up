// initialize an express router
const router = require('express').Router();
const passport = require('passport');
// authenticate with meetup account
router.get('/meetup', passport.authenticate('meetup'));
// handle failure / success after auth attempt
router.get('/meetup/redirect', 
    passport.authenticate('meetup', { failureRedirect: '/' }),
    function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/chat')
    }
);
// export router
module.exports = router;