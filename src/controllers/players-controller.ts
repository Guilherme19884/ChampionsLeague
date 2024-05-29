import { Request, Response } from "express"
import { createPlayerService, deletePlayerService, getPlayerService, updatePlayerService } from "../services/player-service"
import { noContent } from "../utils/http-helper"
import { statisticsModel } from "../models/statistics-model"



export const getPlayer = async ( req: Request, res: Response)=>{

    const HttpResponse = await getPlayerService()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerId = async (req: Request, res: Response) =>{
    const id = req.params.id
    console.log(id)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const HttpResponse = await createPlayerService(bodyValue)

    if(HttpResponse){
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }else{
        const response = await noContent()
        res.status(response.statusCode).json(response.body)
    }
    console.log(bodyValue)
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await deletePlayerService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const updatePlayer = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    const HttpResponse = await updatePlayerService(id, bodyValue)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}