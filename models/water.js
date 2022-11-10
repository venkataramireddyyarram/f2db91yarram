const mongoose = require("mongoose")
const waterSchema = mongoose.Schema({
Water_Name: String,
Water_Company: String,
Water_cost: Number,
Water_Rating: Number
})
module.exports = mongoose.model("water",
waterSchema)