const mongoose = require('mongoose');

const drill = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    sets: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Drill', drill);