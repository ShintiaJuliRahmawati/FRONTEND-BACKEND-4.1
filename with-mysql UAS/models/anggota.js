const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const anggota = require("../controllers/anggota");
const sql = require("./db")


module.exports = {
     insert : (anggotaBaru,result) => {
       sql.query("insert into anggota SET ?",anggotaBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...anggotaBaru});
       })
    },

    getAnggota : (result) =>{
        let query = "Select * From anggota";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getAnggotaById : (id, result) =>{
        let query = `Select * From anggota Where id =${id}`;
        console.log(id)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    update:(id,anggota,result)=>{
        sql.query(
            "UPDATE anggota SET nama = ?, ttg = ?, asal = ? WHERE id = ?",
            [anggota.nama, anggota.ttg, anggota.asal, id],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated anggota : ",{id: id, ...anggota});
                result(null,{id: id, ...anggota});   
            }
        )
    },
    delete: (id, result) =>{
        sql.query("DELETE FROM anggota WHERE id = ?", id,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted anggota with ID : ",id);
            result(null,res);
        });
    },
    getPredikatById:(id,result) =>{
        try {
            sql.query(`SELECT tingkatankader.kdTk, tingkatankader.keterangan,predikat.tahun,predikat.penyelenggara,predikat.predikat 
            FROM anggota,tingkatankader,predikat
            WHERE anggota.id=${id} and predikat.id=${id} and predikat.kdTk=tingkatankader.kdTk`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    }
}