import { PlayerModel } from "../models/players-model"


const database: PlayerModel[] =[
    {id:1, name: "Messi"},
    {id:2, name: "Ronaldo"}
]

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((palyer) => palyer.id === id)
}