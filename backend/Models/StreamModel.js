const mongoose = require("mongoose");

const StreamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A stream must have a name."]
    },
    liveDate: {
        type: Date,
        required: [true, "A stream must have a date."]
    },
    singer: {
        type: String,
        required: [true, "A stream must have a singer."]
    },
    creator: {
        type: Boolean,
    },
    creatorId: {
        type: mongoose.ObjectId
    },
    isLive: {
        type: Boolean,
    }
})

const Stream = mongoose.model('Stream', StreamSchema);

module.exports = Stream