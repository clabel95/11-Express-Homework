const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const JSON_db = require("../db/db.json");

module.exports = (app) => {
    
    app.get('/api/notes', (req,res) =>{  
        fs.readFile("./db/db.json","utf8",(err,data) => {
            if (err) throw err;
            res.send(data);
            console.log(data);
        });
    });
  
    app.post("/api/notes", (req, res) => {
      let new_note = {
        title: req.body.title,
        text: req.body.text,
        id: uuid.v4() 
      };
      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let parse_Data = JSON.parse(data);
        note_Array = parse_Data;
        note_Array.push(new_note);

        fs.writeFile("./db/db.json", JSON.stringify(note_Array, null, 2), (err) => {
          if (err) throw err;
          console.log("Notes saved");
          res.json(JSON_db);
      });
    });
  });
};

