const express = require('express');
const router = express.Router();
const q = require('q');
const unirest = require('unirest');
const api = require('../server/api');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Barter Xclusive'});
});

router.post('/status-check', function (req, res) {
    const data = {
        flw_ref: req.body.flw_ref,
        reference: req.body.reference
    };
    console.log(data);
    api.statusCheck(data)
        .then(function (response) {
            console.log(response);
                return res.json(response);
            },
            function (error) {
                return res.json(error)
            })

});
module.exports = router;
