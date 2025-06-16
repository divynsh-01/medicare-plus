import express from 'express'
import { doctorList } from '../controlers/doctorController.js'
const doctorRouter=express.Router()

//to get all doctor list
doctorRouter.get('/list', doctorList);


export default doctorRouter