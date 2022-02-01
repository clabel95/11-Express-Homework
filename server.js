
const fs = require("fs");
const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const dbJson = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require("./routes/api_route")(app);
require("./routes/html_route")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});