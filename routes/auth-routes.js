const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    // handle with passportjs
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passportjs
    res.send('logging out');
});

// auth with meetup account
router.get('/meetup', 
    passport.authenticate('meetup', { failureRedirect: '/login' }),
    function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/');
    }
);

module.exports = router;