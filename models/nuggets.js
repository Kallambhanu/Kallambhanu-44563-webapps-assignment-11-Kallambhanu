const mongoose = require("mongoose") 
const nuggetsSchema = mongoose.Schema({ 
 nuggets_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("nuggets", 
nuggetsSchema) 