import React from 'react'
import Image from 'next/image'
import { FaQuoteRight, FaStar } from 'react-icons/fa'
 export default function Testimonal(){

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h3 className="text-[#FF9F0D] font-great-vibes text-3xl text-center mb-16">
          Testimonials
        </h3>
        <h1 className="text-white text-4xl font-bold text-center">
            What Our Clients Say
        </h1>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl p-6">
            
          {/* Quote Icon */}
            {/* Quote Icon */}
          <div className="flex justify-center mb-5 ">
            <legend>
              <Image src="/test1.png" alt="quote" width={80} height={80} className="object-contain" />
              </legend>
          </div>
          <div className="flex justify-center mb-5">
          <FaQuoteRight className="text-[#FF9F0D] text-5xl" />
          </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
           
            <div className='flex justify-center mt-5'>
            <span className="text-yellow-600 text-2xl">⭐⭐⭐⭐⭐</span>
             </div>
            <div className='flex justify-center mt-5'>
            <span className='font-bold text-3xl'>Alamin Hasan</span>
            </div>
            <div className='flex justify-center mt-3'>
              <span className='font-light text-2xl '>Food Specialist</span>
            </div>
            
           </div>
           </div>
           </section>
  )
}