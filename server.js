import express from "express"
import ConnectDb from "./Config/db"
import cors from "cors"

const PORT = process.env.PORT || 3000

ConnectDb()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen( PORT, () =>{
  console.log(`server is running in this port $(PORT)`);
})