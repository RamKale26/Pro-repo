require("dotenv").config();
let mysql=require("mysql2");

let conn=mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.db_name
});

conn.connect((err) => {
    if (err) {
        console.error("Database Not Connected:", err.message);
    } else {
        console.log("Database Connected Successfully...");
    }
});


module.exports=conn;