const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});
// auth logout
router.get('/logout', (req, res) => {
    // handle with passportjs
    res.send('logging out');
});
// auth with meetup
router.get('/meetup', (require, res) => {
    // handle with passportjs
    res.send('logging in with meetup')
});

module.exports = router;