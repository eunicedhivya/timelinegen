const mongoose = require("mongoose");
require("dotenv").config();

const client = async() => {
    try{
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.MONGO_URL, connectionParams)
    }catch(error){
        console.log(error);
    }
}

modules.export = client;