import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongodb = process.env.MONGODB
try {
    (async () => {
        await mongoose.connect(mongodb)
        console.log("Connected to MongoDB!");
    })()
} catch (error) {
    console.log(error);
}

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

const port = 4000
app.listen(port, () => {
    console.log(`Server is running in port ${port}!!`);
})