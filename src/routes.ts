import { Router } from "express"
import * as PlayerController from "./controllers/players-controller"
import * as ClubsController from "./controllers/clubs-controller"

const router = Router()
//rotas player
router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerId)
router.post("/players", PlayerController.postPlayer)
router.patch("/players/:id", PlayerController.updatePlayer)
router.delete("/players/:id",PlayerController.deletePlayer)

//rota Clubs
router.get("/clubs", ClubsController.getClubsController)


export default router