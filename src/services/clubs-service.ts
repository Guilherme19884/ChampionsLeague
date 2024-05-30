import * as Http from "../utils/http-helper"
import { findAllClubs } from "../repositories/clubs-repository"


export const getClubsService = async ()=> {
    const data = await findAllClubs ()
    let response = null

    if(data){
        response = await Http.ok(data)
    }else{
        response = await Http.noContent()
    }

    return response
}
