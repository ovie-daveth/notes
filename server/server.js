const express = require('express');
const dotenv  = require('dotenv');
const connectDB = require('./config/dbConfig.js');
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 5001
app.use(express.json());
app.use(cors());

connectDB()

app.use("/api/users", require("./routes/userRoute.js"));
app.use("/api/blog", require("./routes/blogRoute.js"));

app.get('/', (req,res)=>{
    res.send("Hello, world!");
})




app.listen(PORT, connect)

function connect() {
    console.log(`server listening on ${PORT}`)
}