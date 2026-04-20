import {Router} from 'express';

const router = Router()

import {getEmployees,getEmployee,createEmployees,updateEmployees,deleteEmployees} from '../controllers/employees.controller.js'
//se exporta asi los controllers de mierda hijos de la remil chingada

//GET
router.get('/empleados',getEmployees)
router.get('/empleados/:id',getEmployee)
//POST
router.post('/empleados',createEmployees)
//PUT
router.patch('/empleados/:id',updateEmployees)
//DELETE
router.delete('/empleados/:id',deleteEmployees)


export default router//esto siempre va asi