import express from 'express';
import cors from 'cors';
import { get } from 'mongoose';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'



//app config
const app = express();
const port = 4000;

//middle ware
app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)



app.get('/', (req, res) => {
    res.send("API is running");
})



app.listen(port, () =>{
    console.log(`Server Started on http://localhost:${port}`);
})

