const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const { PORT } = require("./constants");

const app = express();

const corsConfig = {
  credentials: true,
  origin: "http://localhost:3000",
};

app.use(cookieParser());
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/blogpost", postRouter);

mongoose.connect(
  process.env.COMPASS_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) =>
    error
      ? console.error(error)
      : app.listen(PORT, () => {
          console.log("Server Is Running");
        })
);
