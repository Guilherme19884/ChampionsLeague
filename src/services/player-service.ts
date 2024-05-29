import { PlayerModel } from "../models/players-model"
import { findAllPlayers, insertPlayer } from "../repositories/players-repository"
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