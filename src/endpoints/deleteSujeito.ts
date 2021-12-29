import { connection } from "../data/connection"
import express, { Request, Response } from "express";


//meu arquivo

export const deleteSujeito = ( async (req:Request,res:Response) => {
    try{

        const result = await connection.raw(`DELETE FROM Sujeitos WHERE id=${req.params.id}`) 
        

    res.send("Sujeito Deletado com Sucesso!")

    }catch(error){
        
        res.status(500).send("Error")
    }
})