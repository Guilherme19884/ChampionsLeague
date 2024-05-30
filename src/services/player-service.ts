import { PlayerModel } from "../models/players-model"
import { statisticsModel } from "../models/statistics-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as Http from "../utils/http-helper"

export const getPlayerService =  async ()=> {

    const data = await PlayerRepository.findAllPlayers()
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
    response = await PlayerRepository.insertPlayer(player)
    response = await Http.created()

    }else{
        console.log('bad request')
        response = await Http.badRequest()
    }
    return response
}

export const deletePlayerService = async (id: number)=> {
    let response = null
    const isDeleted = await PlayerRepository.deleteOnePlayer(id)
    await PlayerRepository.deleteOnePlayer(id)

    if(isDeleted){
        response = await Http.ok({message: "deleted"})
    }else{
        response = await Http.badRequest()
    }
    return response
}

export const updatePlayerService = async(id: number, statistics: statisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics)

    if (!data) {
        return { statusCode: 404, body: { error: "Player not found" } };
    }

    const response = await Http.ok(data)
    return { statusCode: 200, body: response }
}