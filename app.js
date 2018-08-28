const express = require('express');
const app = express();
// setup view engine
app.set('view engine', 'ejs');
// create home route
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () =>
    console.log('buddy-up running on port 3000!')
);