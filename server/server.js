import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import { connect } from 'mongoose';
import connectDB from './config/mongo.js';
import authRouter from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5001
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true}));


app.get('/',(req,res) => {
    res.send('Api working');
})
app.use('/api/auth',authRouter)


app.listen(port, () => {
    console.log(`Server started on PORT :${port}`);
})


