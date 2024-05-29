import { Request, Response } from "express"
import { createPlayerService, getPlayerService } from "../services/player-service"
import { noContent } from "../utils/http-helper"



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
    const id = req.params.id
    const HttpResponse = await deletePlayerService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}