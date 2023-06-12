import mongoose from "mongoose"

export default async function ConnectDatabase(){
   await mongoose.connect(`mongodb+srv://igordb:7bRi54BD4ZkWrkI5@cluster0.au9upuw.mongodb.net/?retryWrites=true&w=majority`)
}

//7bRi54BD4ZkWrkI5