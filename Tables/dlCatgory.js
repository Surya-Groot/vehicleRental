
const mongoose = require('mongoose');


const dlCategory = new mongoose.Schema({

    uniqId: String,
    name: String,
    ABB:String,
    status: { type: String, default: "true" },
})

module.exports = mongoose.model('dlCategory', dlCategory);