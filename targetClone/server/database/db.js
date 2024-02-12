import mongoose from "mongoose";



export const Connection= async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce.qgdl3ry.mongodb.net/TARGETCLONE?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL)
       console.log('database connected')
    } catch (error) {
        console.log('error is getting', error.message)
    }
}

export default Connection;