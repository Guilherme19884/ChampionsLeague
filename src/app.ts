import express from "express"
import router from "./routes"
import cors from "cors"

function createApp(){
    const app = express()
    
    app.use(express.json())
    app.use("/api",router)

    // const corsOptions = {
    //     origin: 'http://Guilhermao.sistem.com', se vender precisa colocar entre vetor ex.: ['http://Guilhermao.sistem.com', 'http://paizao.sistem.com']
    //     methods: ["GET"]
    // }

    app.use(cors())

    return app
}

export default createApp
//cheguei nesse ponto dia 30/052024 