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

routerAnggota.route('/anggota/predikat/:id')
    .get(controllerAnggota.getPredikatById)

routerAnggota.route('/predikat')
    .get(controllerPredikat.getPredikat)

module.exports = routerAnggota
