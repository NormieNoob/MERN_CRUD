import mongoose from 'mongoose'

// const userName = "mithunsurve"
// const userPass = "test123"

const connection = async (userName, userPass) => {
    const URL = `mongodb+srv://${userName}:${userPass}@curd-app.brztoqb.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true} )
        console.log('Database connected successfully')
    }
    catch(error){
        console.log("Error while connecting with database")
    }  
}

export default connection