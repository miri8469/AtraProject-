const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const morgan = require("morgan");
app.use(morgan('dev'));
const mongoose = require("mongoose");
// const UserRouter = require("./api/routers/userRuoter")
// const ImgeRouter = require("./api/routers/imageRouter")
const userRouter=require('./API_New/routes/userRouter');
const imageRouter=require('./API_New/routes/imageRouter');

const env = require("dotenv");
env.config();
const request = require('request')
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methodes", "PUT, POST, PATCH ,DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.listen(5000, () => {
    console.log("application is running in port 5000")
})

request('https://api.nasa.gov/planetary/apod?api_key=l9qlCUbnGof4MaTH8MnqIVrahBSkd8J9C7iiVCxL',
    { json: true }, (err, res, body) => {
        if (err) { return console.log("myerr:" + err); }
        console.log('body.url', body.url);
        console.log('body===============', body);

    })

app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({
    extended: false,
}));

// app.use("/users", UserRouter);
// app.use("/images", ImgeRouter);

app.use("/users", userRouter);
app.use("/images", imageRouter);

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log("connected DB");
}).catch((err) => console.log(err));


