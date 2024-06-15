const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const sequelize = require("./util/database");
const Company = require("./models/player.js");

var cors = require("cors");
const path = require("path");
// app.use(bodyParser.urlencoded({ extended: false }));

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
app.use(routes);

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
