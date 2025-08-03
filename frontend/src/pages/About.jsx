import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div> 
      <div> 
      <p className='text-center text-2xl pt-10 text-gray-500'>ABOUT <span className='text-gray-700 font-medium'>us</span></p>
      </div>
    <div className='my-19 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 mg:w-2/4 text-sm text-gray-600 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quaerat numquam cumque neque facere odio sunt iusto iure veniam animi corporis temporibus facilis rerum maxime pariatur delectus consequuntur, dolor nam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ut animi neque impedit dicta quod nam fugit! Atque minus fugiat dolores modi sequi obcaecati, velit dignissimos distinctio repellendus nostrum?
        Dignissimos at omnis nisi labore ad similique quas odit quos officia recusandae magni mollitia incidunt.</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore officiis ut dolorem architecto nemo libero nesciunt illo ullam asperiores magnam, sit rem, nam sequi voluptatem? Optio, officiis? Tempora, esse ad.</p>
      </div>
    </div>
    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>  </p>
    </div>

    <div className='flex flex-col md:flex-row mb-20 '>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Convenience:</b>
      <p>Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Personalization:</b>
      <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>
    </div>
    
  )
}

export default About