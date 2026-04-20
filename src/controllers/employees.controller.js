import {pool} from '../db.js'


export const getEmployees = async(req,res) => {
    try{  
        const [rows] = await pool.query('SELECT * FROM employee ') 
        res.send(rows)  
    } catch (error) {
        return res.status(500).json({msg:"algo fue mal"})
    }   
}


export const getEmployee = async(req,res) => {
    try{
    const idbusca = parseInt(req.params.id)
    const [rows] = await pool.query('select * FROM employee WHERE id = ? ',[idbusca])
    if( rows.length <=0) return res.status(404).json({message:'no fue encontrado ese empleado demierda'})
    res.send(rows)}
    catch (error) {
        return res.status(500).json({msg:"algo fue mal"})
    }
}



export const createEmployees = async (req,res) => {
    try{const {name,salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES(?,?)',[name,salary])
    res.send({
        id:rows.id,
        name,
        salary
    })}
    catch(error){
        return res.status(500).json({msg:"algo fue mal"})
    }
}


export const updateEmployees = async(req,res) => {
    try{const {id} = req.params
    const {name,salary} = req.body
    
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name),salary =IFNULL(?,salary) WHERE id = ?',[name,salary,id])
    if (result.affectedRows <= 0) return res.status(404).json({msg:'no encontre nada negrito'})
    const [rows] = await pool.query('select * from employee where id =?',[id])
    res.send(rows[0])}
    catch (error) {
        return res.status(500).json({msg:"algo fue mal"})
    }


}


export const deleteEmployees = async(req,res) => {
    try{const [result] = await pool.query('DELETE FROM employee where id = ?',[parseInt(req.params.id)])
    if (result.affectedRows <= 0) return res.status(404).json({
        msg:'no elimino nada pq no existe este cuate'
    }) 

    res.json(result)}
    catch (error) {
        return res.status(500).json({msg:"algo fue mal"})
    }
}

