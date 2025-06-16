import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true,unique:true},
  password:{type:String, required:true },
  image:{type:String, required:false},
  address:{type:Object, default:{line1:'',line2:''} },
  gender:{type:String, default:"Not Selected" },
  dob:{type:String, default:"Not Selected" },
  phone:{type:String, default:'0000000000' },
   
})

const userModel= mongoose.model('user',userSchema)
//whenever this project is started this statement will be executed
export default userModel