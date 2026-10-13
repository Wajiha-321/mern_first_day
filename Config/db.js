import mongoose from "mongoose"

const ConnectDb = ()=>{
    try {
        const db = mongoose.connect(process.env.DB_URL)
            console.log("database connected")
    } catch (error) {
        console.log("error")
    }
}

export default ConnectDb