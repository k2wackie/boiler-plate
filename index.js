const express = require("express");
const dotenv = require("dotenv");
const app = express();

const config = require("./config/key");

const { User } = require("./model/User");

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//application/json
app.use(express.json());

const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 5000;
const mongoDB_ID = process.env.DB_USER;
const mongoDB_PW = process.env.DB_PSWORD;

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("h"));

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
