import doctorModel from "../models/doctorModel.js";

 


   const changeAvailability=async(req,res)=>{
  try {
    const {docId}=req.body

    const docData= await doctorModel.findById(docId)
    await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
    res.json({success:true,message:'Availability changed'})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
  }

 }

 // API to get all doctors list for frontend
 const doctorList=async(req,res)=>{
  try {
    const doctors=await doctorModel.find({}).select(['-password','-email']) // it will get all the data excluding email and password for frontend
    res.json({success:true,doctors})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }
export {changeAvailability,doctorList}