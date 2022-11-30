const mongoose = require("mongoose") 
const nuggetsSchema = mongoose.Schema({ 
 nuggets_type:{ 
    type: String, 
    required:true
},
 size: {
    type: String, 
    required:true
} ,
 cost: {
    type:Number , 
    min:1,max:110 
}
}) 
 
module.exports = mongoose.model("nuggets", 
nuggetsSchema) 