import {createPool} from 'mysql2/promise'//esto es para las promesas de nuevas versiones de mysql
import {DB_HOST,DB_PORT,DB_DATABASE,DB_USER,DB_PASSWORD} from './config.js'
export const pool = createPool({//esto se hace para cada base de datos
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database: DB_DATABASE
})

