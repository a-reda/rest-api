var express = require('express');
var router = express.Router();


var DataSchema = require('./data');

/*--------------------------------------//

        Reservation controller

        Endpoints :
          - POST /reservations/insert
           a reservation entity should be sent
           in the body, check the reservation model
           for the different attributes

//--------------------------------------*/


// POST /reservations/insert
router.post('/', function (req, res) {
   var params = req.body;
   DataSchema.create(params, function (err, data) {
        if (err) {
             res.send({
               message: "Error while processing",
               error: err
             });
        }
        else {
                res.send({
                  message: "Data created",
                  data: data
                });
        }
    });
});


router.get('/', function (req, res) {
    DataSchema.find({}, function (err, doctors) {
        if (err) return res.status(500).send("There was a problem finding the doctors.");
        res.status(200).send(doctors);
    });
});

module.exports = router;
