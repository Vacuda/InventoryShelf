const express = require("express");
const app = express();
// const mongoose = require('mongoose');

//////

app.listen(8000, () => console.log("listening on port 8000"));
// app.use(express.static(__dirname + "/static"));
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public/dist/public' ));

//////

require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});