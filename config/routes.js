const express =require("express") 
const routes = express.router()


let db = [
    {"1" : { nome: "cliente 1" , idade: "20" } }, 
    {"2" : { nome: "cliente 2" , idade: "22" } },
    {"3" : { nome: "cliente 3" , idade: "23" } }
]

// Buscar Dados 
routes.get("/",(req,res) => {
     return res.json(db)
})

// Inserir Dados
routes.post("/add",(req,res) => {
    const body = req.body
    if(!body)
        return res,status(400).end() 

        db.push(body)
         return res.json(body)
})

routes.delete("/:id",(req,res) => {
    const id =req.params.id

let.newDB = db.filter(item => {
   if (!item[id])
    return item

})
      db = newdb
      return res.send(newdb)
})
     


module.exports = routes

