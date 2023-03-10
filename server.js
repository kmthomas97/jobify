
import 'express-async-errors'
import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

//db and authenticateUser
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'


//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use(express.json())


//express trying to match request to routes first
app.get('/', (req, res) => {
    res.json({msg: 'Welcome!'})
})


app.get('/api/v1', (req, res) => {
    res.json({msg: 'API'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)


//if no routes match. signals for all http methods (get,post, etc..)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT  || 5000



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    }   catch (error) {
        console.log(error)
    }
}
start()