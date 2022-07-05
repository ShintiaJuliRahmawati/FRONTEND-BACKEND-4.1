const res = require('express/lib/response')
const predikat = require('../models/predikat')

module.exports = {

    getPredikat: (req, res) => {
        predikat.getPredikat((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    }
}
