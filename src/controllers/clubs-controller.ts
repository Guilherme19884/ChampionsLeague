import { Request, Response } from "express"
import { getClubsService } from "../services/clubs-service"

export const getClubsController = async (req: Request, res: Response)=> {
    const HttpResponse = await getClubsService()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}
