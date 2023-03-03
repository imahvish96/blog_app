const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./Routes/auth.routes');
const postRouter = require('./Routes/post.routes');
const { PORT } = require('./constants');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/auth', authRouter);
app.use('/blogpost', postRouter);


mongoose.connect(process.env.COMPASS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, (error) => error ? console.error(error)
  : app.listen(PORT, () => {
        console.log('Server Is Running');
    })
);



