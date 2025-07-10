import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {
  const [docImg,setDocImg]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  //whenever we use select tag then we have to initialize the value with 1st option of the select tag
  const [experience,setExperience]=useState('1 Year')
  const [fees,setFees]=useState('')
  const [about,setAbout]=useState('')
  const [speciality,setSpeciality]=useState('General Physician')
  const [degree,setDegree]=useState('')
  const [address1,setAddress1]=useState('')
  const [address2,setAddress2]=useState('')
   
  const {backendUrl,aToken}=useContext(AdminContext)


    const onSubmitHandler=async(event)=>{
        event.preventDefault()

        try {
          if(!docImg){
            return toast.error('Image not selected')
          }
          
          const formData=new FormData()
          formData.append('newImage',docImg)
          formData.append('name',name)
          formData.append('email',email)
          formData.append('password',password)
          formData.append('experience',experience)
          formData.append('fees',Number(fees))
          formData.append('about',about)
          formData.append('speciality',speciality)
          formData.append('degree',degree)
          formData.append('address',JSON.stringify({line1:address1,line2:address2}))

          //  consolelog form data
          // formData.forEach((value,key)=>{
          //    console.log(`${key}: ${value}`);
             
          // })
          //API call to the backend to save the doctor data into the database


          const {data}=await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{aToken}})
          if(data.success){
            toast.success(data.message)
            setDocImg(false)
            setName('')
            setPassword('')
            setEmail('')
            setAddress1('')
            setAddress2('')
            setDegree('')
            setAbout('')
            setFees('')

          }
          else{
            toast.error(data.message)
          }
        } catch (error) {
          toast.error(error.message)
          console.log(error)
        }

    }

  return (
   <form onSubmit={onSubmitHandler} className='w-full max-w-5xl  mx-4 p-4  left-0'>
    <p className='mb-3 text-lg font-medium hidden'>Add Doctor</p>
    <div>
      <div className='bg-white border-none rounded w-full overflow-y-visible'>
        <div className='flex items-center gap-4 mb-10 text-gray-600'> 
          <label htmlFor="doc-img" className="w-20 h-20 flex items-center justify-center">
            <img className='w-16 h-16 bg-gray-100 rounded-full cursor-pointer' src={docImg?URL.createObjectURL(docImg) :assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p className="text-sm text-gray-500">Upload doctor <br/> picture</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-6'> 
          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Doctor name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' className="border rounded p-2 w-full h-10" required />
          </div>

          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Speciality</p>
            <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} name="" id="" className="border rounded p-2 w-full h-10 appearance-none bg-white pr-8">
              <option value="General Physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Doctor Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className="border rounded p-2 w-full h-10 bg-blue-50" required />
          </div>

          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Education</p>
            <input onChange={(e)=>setDegree(e.target.value)} value={degree} type="text" placeholder='Education' className="border rounded p-2 w-full h-10" required />
          </div>

          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Doctor Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="border rounded p-2 w-full h-10 bg-blue-50" required />
          </div>

          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Address</p>
            <input onChange={(e)=>setAddress1(e.target.value)} value={address1} type="text" placeholder='address 1' className="border rounded p-2 w-full h-10 mb-2" required/>
            <input onChange={(e)=>setAddress2(e.target.value)} value={address2} type="text" placeholder='address 2' className="border rounded p-2 w-full h-10" required/>
          </div>
        
          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Experience</p>
            <select onChange={(e)=>setExperience(e.target.value)} value={experience} name="" id="" className="border rounded p-2 w-full h-10 appearance-none bg-white pr-8">
              <option value="1 Year">1 Year</option>
              <option value="2 Year">2 Year</option>
              <option value="3 Year">3 Year</option>
              <option value="4 Year">4 Year</option>
              <option value="5 Year">5 Year</option>
              <option value="6 Year">6 Year</option>
              <option value="7 Year">7 Year</option>
              <option value="8 Year">8 Year</option>
              <option value="9 Year">9 Year</option>
              <option value="10 Year">10 Year</option>
            </select>
          </div>
        
          <div className='flex flex-col gap-2'>
            <p className="text-gray-600 text-sm">Fees</p>
            <input onChange={(e)=>setFees(e.target.value)} value={fees} type="number" placeholder='fees' className="border rounded p-2 w-full h-10" required />
          </div>
        </div>
        
        <div className='mb-4 w-full'>
          <p className="text-gray-600 text-sm">About Doctor</p>
          <textarea onChange={(e)=>setAbout(e.target.value)} value={about} type="text" placeholder='write about doctor' rows={3} className="border rounded p-2 w-full mt-2" required />
        </div>
        
        <button type='submit' className='mt-6 bg-blue-600 text-white py-2 px-4 rounded'>Add doctor</button>
      </div>
    </div>
   </form>
  )
}

export default AddDoctor