import app from './app.js'
import { PORT } from './config.js'


app.listen(PORT,()=>{
    console.log(`server escuchando desde el puerto ${PORT}`)
})