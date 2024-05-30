import { ClubsModel } from "../models/Clubs-model"

const database: ClubsModel[] = [
   { 
        id: 1,
        name: "Barcelona",
   }
]


//buscar todos os clubs
export const findAllClubs = async(): Promise<ClubsModel[]> => {
    return database
}