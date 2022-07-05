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
}
}
