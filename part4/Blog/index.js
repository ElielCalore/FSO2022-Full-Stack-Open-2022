const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/db.config");
dbConnect();
require('dotenv').config();

app.use(express.json());
app.use(cors());

const UserRouter = require("./controllers/user.router");
app.use("/user", UserRouter);

const BlogRouter = require("./controllers/blog.router");
app.use("/blog", BlogRouter);

const middleware = require('./utils/middleware')
app.use(middleware.requestLogger);
app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);




app.listen(Number(process.env.PORT), () =>{
    console.log('Server up at port: ', process.env.PORT);
})