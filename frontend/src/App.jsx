 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Contact from './pages/contact'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
 
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyAppointments from './pages/MyAppointments'
import { ToastContainer, toast } from 'react-toastify';
 
 
 
 
 const App = () => {
   return (
     <div className=' mx-4 sm:mx-[10%]' >
      <ToastContainer/>
       <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>} /> 
      <Route path='/Doctor' element={<Doctor/>}/>
      <Route path='/Doctor/:speciality' element={<Doctor/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/My-Profile' element={<MyProfile/>}/>
       <Route path='/my-appointments' element={<MyAppointments/>}></Route>
       <Route path='/appointment/:docId' element={<Appointment/>}/>
       
        
    </Routes>
      <Footer/>
     </div>
   )
 }
 
 export default App