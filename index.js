import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./src/Config/connect.js";
import studentRoute from "./src/route/studentRoute.js";
//import bodyParser from "body-parser";
//import cors from "cors";


const app = express();
dotenv.config();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(
  //  cors({
    //    origin: "http://localhost:3000"
  //  })
//);

app.use("/api", studentRoute)


async function connect() {
    try {
        app.listen(3500, () => {
            connectDB(process.env.MONGODB_PASSWORD);
            console.log("server is running on port 3500");
        });
    } catch (err) {
        console.log(err);
    }
}
connect();








