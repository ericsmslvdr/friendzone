import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))

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