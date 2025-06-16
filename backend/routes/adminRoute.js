import express from 'express'
import { addDoctor,allDoctors,loginAdmin } from '../controlers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js' 
import { changeAvailability } from '../controlers/doctorController.js'


//create the router
const adminRouter=express.Router()
//using this we can create multiple endpoints

adminRouter.post('/add-doctor', authAdmin,upload.single('newImage'),addDoctor)
adminRouter.post('/login',  loginAdmin)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin,changeAvailability )
 

export default adminRouter