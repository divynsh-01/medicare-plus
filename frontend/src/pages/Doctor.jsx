import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors = [] } = useContext(AppContext); // Fallback to an empty array
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFiter,setShowFilter] =useState(false)

  // Function to apply filtering logic
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the specialist doctors.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar with specialities */}
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFiter ? 'bg-primary text-white ':''}`} onClick={()=>{setShowFilter(prev=> !prev)}} >Filters </button>
        <div className={`   flex-col gap-4 text-sm text-gray-600 ${showFiter ? 'flex' :'hidden sm:flex'}`}>
          <p onClick={()=>speciality === 'General physician' ? navigate('/Doctor'): navigate('/Doctor/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black":""}`}>General physician</p>
          <p onClick={()=>speciality === 'Gynecologist' ? navigate('/Doctor'): navigate('/Doctor/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black":""}`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/Doctor'): navigate('/Doctor/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black":""}`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians' ? navigate('/Doctor'): navigate('/Doctor/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black":""}`}>Pediatricians</p>
          <p onClick={()=>speciality === 'Neurologist' ? navigate('/Doctor'): navigate('/Doctor/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black":""}`}>Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/Doctor'): navigate('/Doctor/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black":""}`}>Gastroenterologist</p>
        </div>
        
        {/* List of Doctors */}
        <div className=" w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
            >
              <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
