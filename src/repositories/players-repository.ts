import { PlayerModel } from "../models/players-model"
import { statisticsModel } from "../models/statistics-model"


const database: PlayerModel[] =[
    {
        id: 1,
        name: "lionel Messi",
        club: "Paris Sint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics:{
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Ronaldo Gaucho",
        club: "Barcelona",
        nationality: "Brasileira",
        position: "Forward",
        statistics:{
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    }
]

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((palyer) => palyer.id === id)
}

export const insertPlayer = async(player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex ( p => p.id === id)

    if(index != -1){
        database.splice(index, 1)
        return true
    }
    return false
}
// find player
export const findAndModifyPlayer = 
async (id: number, statistics: statisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex ( player => player.id === id)

    if(playerIndex === -1){
        console.log("Não encontrado")
    }
    database [playerIndex].statistics = statistics
    return  database [playerIndex]
}