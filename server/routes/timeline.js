const express = require("express");
const Timelines = require("../models/timeline")

const router = express.Router();

// Get all timelines

// Get select timeline

// Create a new timeline
router.post("/", (req, res) => {
    try{
        console.log(req.body)
    }catch{
        res.status(500).json({ error:error.message })
    }
})

module.exports = router;