const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const { PORT } = require("./constants");

// const options = {
//   key: fs.readFileSync(path.join(__dirname, "./sslcert/key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "./sslcert/cert.pem")),
// };

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

// const server = https.createServer(options, app);

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
          console.log("Server Is Running" + " " + PORT);
        })
);
