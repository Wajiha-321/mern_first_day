import express from "express"
import ConnectDb from "./Config/db.js"
import Routers from "./Routes/Register.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

ConnectDb()
app.use(cors())

app.use("/api", Routers)

app.listen( PORT, () =>{
  console.log(`server is running in this port $(PORT)`);
})