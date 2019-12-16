const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const dbUrl = process.env.DB_URL;
console.log(dbUrl)
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('db connect success!')
}).catch(err => {
    console.log(err)
});

const termsRouter = require('./routes/terms')

app.use('/terms', termsRouter)

app.listen(port, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
});