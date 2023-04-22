const app = require("./app.js");

const mongoose = require('mongoose'); // Importing Mongoose



const connectDatabase = () => {
    return mongoose.connect("mongodb+srv://mongo:ABHKPV2020@cluster0.ng3en0j.mongodb.net/?retryWrites=true&w=majority").then((data)=>{
        console.log(`Connected to database data`) // log this statement if connection is successful
    })
}

connectDatabase();

const PORT = process.env.PORT | 4000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
