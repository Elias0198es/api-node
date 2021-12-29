import { connection } from "../data/connection"
import express, { Request, Response } from "express";


//meu arquivo

export const getSujeitos = ( async (req:Request,res:Response) => {
    try{

        const result = await connection.raw(`SELECT * FROM Sujeitos`) 
        
        
    res.send(result[0])

    }catch(error){
        
        res.status(500).send("Error")
    }
})