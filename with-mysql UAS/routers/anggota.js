const express = require("express");
const routerAnggota = express.Router()
const controllerAnggota = require('../controllers/anggota')
const controllerPredikat = require('../controllers/predikat')


routerAnggota.route('/anggota')
    .get(controllerAnggota.getAnggota)
    .post(controllerAnggota.insert)

routerAnggota.route('/anggota/:id')
    .put(controllerAnggota.update)
    .delete(controllerAnggota.delete)
    .get(controllerAnggota.getAnggotaById)

routerAnggota.route('/predikat')
    .get(controllerPredikat.getPredikat)

routerAnggota.route('/predikat/:id')
    .get(controllerPredikat.getPredikatById)

module.exports = routerAnggota
