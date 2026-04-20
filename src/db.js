import {createPool} from 'mysql2/promise'//esto es para las promesas de nuevas versiones de mysql
import {MYSQLHOST,MYSQLPORT,MYSQLDATABASE,MYSQLUSER,MYSQLPASSWORD} from './config.js'
export const pool = createPool({//esto se hace para cada base de datos
    host:MYSQLHOST,
    user:MYSQLUSER,
    password:MYSQLPASSWORD,
    port:MYSQLPORT,
    database: MYSQLDATABASE
})

