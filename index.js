const express = require('express') 
const morgan = require ("morgan")    
const cors = require ("cors")
const bodyparser = require ("body-parser")
const routes = require("./config/routes")

const app = express()

app.use(morgan("dev"))
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routers)



app.listen(30000, () => { 
    console.log("express started at http://localhost:30000")
})
