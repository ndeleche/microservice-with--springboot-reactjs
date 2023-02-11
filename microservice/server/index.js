const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "microservice"
  });

app.use(bodyParse.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/gethouse", (req, res) => {
  const sqlquery = "SELECT * FROM house";
  db.query(sqlquery, (error, result) => {
    console.log("error", error);
    console.log("result", result);
    res.send(result);
  });
});

app.post("/api/sendhouse", (req, res) => {
  const {id, name , description, price}  = req.body;
  const sqlInsert = "INSERT INTO house (id,name,description,price) VALUES(?, ?, ?, ?)";
  db.query(sqlInsert, [id,name,description,price], (error, result) => {
    if(error){
      console.log("error",error);
    }
  });
});

  app.post("/api/postcar", (req, res) => {
    const {id, name , description, price}  = req.body;
    const sqlInsert = "INSERT INTO car (id,name,description,price) VALUES(?, ?, ?, ?)";
    db.query(sqlInsert, [id,name,description,price], (error, result) => {
      if(error){
        console.log("error",error);
      }
    });
  });

  app.get("/api/car", (req, res) => {
    const sqlquery = "SELECT * FROM car";
    db.query(sqlquery, (error, result) => {
      console.log("error", error);
      console.log("result", result);
      res.send(result);
    });
  });

  app.post("/api/phone", (req, res) => {
    const {id, name , description, price} = req.body;
    const sqlInsert = "INSERT INTO phone (id, name , description, price) VALUES(?,?,?,?)";
    db.query(sqlInsert,[id, name , description, price], (error, result) => {
      console.log("error", error);
      console.log("result", result);
      res.send(result);
    });
  });

  app.get("/api/getphone", (req, res) => {
    const sqlquery = "SELECT * FROM phone";
    db.query(sqlquery, (error, result) => {
      console.log("error", error);
      console.log("result", result);
      res.send(result);
    });
  });

  app.post("/api/motorcycle", (req, res) => {
    const {id, name , description, price} = req.body;
    const sqlInsert = "INSERT INTO motorcycle (id, name , description, price) VALUES(?,?,?,?)";
    db.query(sqlInsert,[id, name , description, price], (error, result) => {
      console.log("error", error);
      console.log("result", result);
      res.send(result);
    });
  });

  app.get("/api/getmotorcycle", (req, res) => {
    const sqlquery = "SELECT * FROM motorcycle";
    db.query(sqlquery, (error, result) => {
      console.log("error", error);
      console.log("result", result);
      res.send(result);
    });
  });

  app.put("/update/car",(req,res)=>{
    const {id} = req.params;
    const sqlUpdate ="UPDATE car SET name = ? WHERE id = ?";

    dbh.query(sqlUpdate, id, (error,result)=>{
        console.log("error",error);
        console.log("result",result);
        res.send(result);
    })
})
  
  app.delete("/api/car/:name", (req, res) => {
    const deleSql = "DELETE FROM car WHERE name = ?";
    db.query(deleSql,(error, result) => {
      if(error){
        console.log("error", error);
      }
    });
  });


app.post("/api/product", (req, res) => {
  const {id, title , image, price}  = req.body;
  const sqlInsert = "INSERT INTO product (id, title , image, price) VALUES(?, ?, ?, ?)";
  db.query(sqlInsert, [id, title , image, price], (error, result) => {
    if(error){
      console.log("error",error);
    }
  });
});

app.get("/api/productget", (req, res) => {
  const sqlquery = "SELECT * FROM product";
  db.query(sqlquery, (error, result) => {
    console.log("error", error);
    console.log("result", result);
    res.send(result);
  });
});
