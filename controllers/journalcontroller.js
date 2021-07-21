const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) => {
    res.send('This is a practice thing lol')
});

router.get('/about', (req, res) => {
    res.send("This is the about thingy");
})

module.exports = router;