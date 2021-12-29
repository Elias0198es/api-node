import { connection } from "../data/connection"
import express, { Request, Response } from "express";


//meu arquivo

export const updateSujeito = ( async (req:Request,res:Response) => {
    try{

        await connection.raw(`UPDATE Sujeitos
        SET nome = "${req.body.nome}",
        nascimento = "${req.body.nascimento}",
        cpf = "${req.body.cpf}",
        telefone = "${req.body.telefone}",
        email = "${req.body.email}",
        municipio = "${req.body.municipio}" 

        WHERE id=${req.params.id}
    `)
    res.send("Sujeito Alterado com Sucesso!")

    }catch(error){
        res.status(500).send("Error")
    }
})