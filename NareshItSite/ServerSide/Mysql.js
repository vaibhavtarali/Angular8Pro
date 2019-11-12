var mysql = requir("mysql");

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "12345",
    database : "demodb"
})
con.connect();
con.query("Select *from tblproducts",function (err,rows,fields){
    if(!err){
        console.log(rows);
    }else
    {
        console.log(err);
    }
})