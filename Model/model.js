import mongoose  from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String,
        default: "user"
    },
})

const userModal = mongoose.model("userModal", userSchema);

export default userModal