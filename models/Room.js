const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
        },phone:{
            type:Number,
            required:true,
            unique:true,
        },time:{
            type:String,
            required:true,
            
        }
    }
)

export default mongoose.model("User,UserSchema");