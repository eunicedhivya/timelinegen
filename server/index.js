const express = require("express");
const cors = require("cors");
require("dotenv").config();


const timelineRoutes = require("./routes/timeline");


const PORT = process.env.PORT;
const app = express();


app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to Timeline API"
    })
})




app.listen(PORT, ()=>console.log("server has started @ "+PORT))

app.use("/timeline", timelineRoutes)