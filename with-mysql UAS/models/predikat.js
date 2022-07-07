const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const predikat = require("../controllers/predikat");
const sql = require("./db")

module.exports = {
    getPredikat : (result) =>{
        let query = "Select * From predikat";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },
    getPredikatById:(id,result) =>{
        try {
            sql.query(`SELECT anggota.id, anggota.nama, predikat.kdTk, predikat.tahun, predikat.predikat, tingkatankader.keterangan FROM anggota, predikat, tingkatankader WHERE anggota.id=${id} AND predikat.id=${id} AND predikat.kdTk=tingkatankader.kdTk;`,
            (err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}
