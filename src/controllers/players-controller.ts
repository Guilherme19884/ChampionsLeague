import { Request, Response } from "express"
import { getPlayerService } from "../services/player-service"

export const getPlayer = async ( req: Request, res: Response)=>{

    const data = await getPlayerService()

    res.status(200).json(data)
}