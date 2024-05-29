import { PlayerModel } from "../models/players-model"
import { statisticsModel } from "../models/statistics-model"
import { deleteOnePlayer, findAllPlayers, insertPlayer } from "../repositories/players-repository"
import * as Http from "../utils/http-helper"

export const getPlayerService =  async ()=> {

    const data = await findAllPlayers()
    let response = null

    if(data){
        response = await Http.ok(data)
    }else{
        response = await Http.noContent()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel)=> {
    let response = null

    if(Object.keys(player).length !== 0){
    response = await insertPlayer(player)
    response = Http.created()

    }else{
        console.log('bad request')
        response = Http.badRequest()
    }
    return response
}

export const deletePlayerService = async (id: number)=> {
    let response = null
    await deleteOnePlayer(id)

    response = Http.ok({message: "deleted"})
    return response
}

export const updatePlayerService = async(id: number, statistics: statisticsModel) => {
    
}