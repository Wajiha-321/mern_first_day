import express from "express";

import {InsertData} from "../Controller/Register.js"

const Routers = express.Router();





Routers.post("/create",  InsertData)


export default Routers;