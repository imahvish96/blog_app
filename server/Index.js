//modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./Routes/Routes');

const app = express();

// parse application/json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config({ path: './config.env' });
app.use(express.static('public'));
app.use(routes);

//db connection
mongoose.connect(
  process.env.COMPASS_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err
      ? console.log(err)
      : app.listen(process.env.PORT, () => {
          console.log('Server Is Running');
        })
);
