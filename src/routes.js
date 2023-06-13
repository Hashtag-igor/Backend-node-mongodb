import { Router } from "express"

import { getUsers, createUser, deleteUser } from "./controller/UserController.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.json({
        sucess: true,
        message: "Sucesso!"
    })
})

//Metodo GET
routes.get("/users", getUsers)

//Metodo POST
routes.post("/users", createUser)

//Metodo DELETE
routes.delete("/users/:id", deleteUser)


export default routes