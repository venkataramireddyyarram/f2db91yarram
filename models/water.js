const mongoose = require("mongoose")
const waterSchema = mongoose.Schema({
Water_Name: {type: String,required: [true, 'Name of the water cannot be empty']},
Water_Company: {type: String,required: [true, 'Company of the Water cannot be empty']},
Water_cost: {type: Number,required: [true, 'cost of the water cannot be empty']},
Water_Rating: {type: Number,required: [true, 'Rating of the water cannot be empty']}
})
module.exports = mongoose.model("water",waterSchema)