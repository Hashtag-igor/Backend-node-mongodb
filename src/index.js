import express from "express"
import cors from "cors"

import ConnectDatabase from "./database/db.js"
import routes from "./routes.js"

const port = process.env.Port || 3001

const app = express()

//avisando minha aplicação que vou usar json;
{/* Ao adicionar app.use(cors()) antes de app.use(routes), você estará aplicando o middleware cors apenas para as rotas
..definidas no arquivo routes.js. Isso permite que essas rotas aceitem solicitações de qualquer origem.*/}
app.use(cors());

app.use(express.json())
app.use(routes)

//Faz uma procura pelo banco de dados que está no ConnectDatabase. Se conectar chama o then, se não chama o catch;
ConnectDatabase()
    .then(() => {
        app.listen(port, () => console.log("Banco de dados Conectado"))
    })
    .catch((error) =>{
    console.log(error)
})
