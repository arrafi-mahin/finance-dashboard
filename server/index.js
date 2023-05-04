import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js"
import productRoutes from "./routes/productRoutes.js"
import Product from "./models/Product.js"
import KPI from "./models/KPI.js";
import  {kpis, products } from './data/data.js'
// Configuration
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Routes
app.use("/kpi",kpiRoutes)
app.use("/product",productRoutes )
// Mongoose setup
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async ()=> {
    app.listen(PORT, ()=> console.log(`server port: ${PORT}`));
    // ADD DATA ONE TIME ONLY OR AS NEEDED
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    console.log("connected")
})
.catch(err=> console.log(err))
