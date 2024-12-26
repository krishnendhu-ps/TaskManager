const mongoose=require("mongoose")

const taskschema=new mongoose.Schema({
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    Iscompleted:{type:Boolean,required:true},
    DueDate:{type:Date,required:true}
})
module.exports=mongoose.model('task',taskschema);