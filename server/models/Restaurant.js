let mongoose = require("mongoose");
let Schema   = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let Restaurant = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

    type:{
        type:String,
        required:true,
        minlength:3
    },

    reviews:{
        type:String,
    },

    likes:{
        type:Number,
        default:0
    },

});

mongoose.model("Restaurant",Restaurant);