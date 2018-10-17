require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const { getweather } = require("./controller/controller");
const port = process.env.PORT || 3001;

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(err => console.log(err));
app.use(json());
app.use(cors());

app.get("");
app.post("");
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
