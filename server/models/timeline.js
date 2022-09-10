const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timelines: {
        type: [{
            year : String,
            desc : String
        }],
        default: undefined
    }
})

module.exports = mongoose.model("timeline", timelineSchema)