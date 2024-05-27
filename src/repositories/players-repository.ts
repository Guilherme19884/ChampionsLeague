import { PlayerModel } from "../models/players-model"


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