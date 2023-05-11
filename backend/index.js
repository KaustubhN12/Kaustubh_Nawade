const express = require("express");
const cors = require("cors");
const {connection} = require("./db");
const {adsRouter} = require("./Routes/Ads.route")
const app = express();

app.use(cors());

app.use("/ads",adsRouter);

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("server is running on 8080 port");
        console.log("connected to mongoDB");
    } catch (err) {
        console.log(err)
    }
})