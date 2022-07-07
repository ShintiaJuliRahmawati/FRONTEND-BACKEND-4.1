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
    },
    getPredikatById : (req,res)=>{
        predikat.getPredikatById(req.params.id,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Predikat dengan Id ${req.params.id} tidak di temukan`
                })
            }
            else{
                res.status(500).send({
                    nilai : []
                });
            }
           }
           else{
               res.send(data)
           }
        });
    }
}
