const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 5000;
const mongoDB_ID = process.env.DB_USER;
const mongoDB_PW = process.env.DB_PSWORD;

mongoose
  .connect(
    `mongodb+srv://${mongoDB_ID}:${mongoDB_PW}@boilerplate.gpqid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("h"));
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
