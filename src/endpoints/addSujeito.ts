import { connection } from "../data/connection"
import express, { Request, Response } from "express";


export const addSujeito = ( async (req:Request,res:Response) => {
    try{

    await connection.raw(`INSERT INTO Sujeitos(nome,nascimento,cpf,telefone,email,municipio)

    VALUES ("${req.body.nome}",
        "${req.body.nascimento}",
        "${req.body.cpf}",
        "${req.body.telefone}",
        "${req.body.email}",
        "${req.body.municipio}")
    `)
    res.send("Sujeito Cadastrado com Sucesso!")

    }catch(error){
        res.status(500).send("Error")
    }
})