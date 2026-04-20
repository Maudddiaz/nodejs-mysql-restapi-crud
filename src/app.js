import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexroutes from './routes/index.routes.js'
import './config.js'
import {PORT} from './config.js'

const app = express()


//middlewares
app.use(express.json())

//enrutamientos 
app.use(indexroutes)
app.use('/api',employeesRoutes)



app.use((req,res,next)=>{
    res.status(404).json({
        msg:"not found"
    })
})
export default app