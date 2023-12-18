import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'



const Login = () => {

  const [formData,setFormData] = useState({
    mobile:"",
    password:""
  })

  const [btnLoading,setBtnLoading] = useState(false)

  return (
    <div className='w-full mt-8 flex flex-col justify-center items-center'>
      <h1 className='text-xl font-bold '>Login</h1>
      
              <div class="p-2 w-full md:w-1/4">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                  Mobile No
                  </label>
                  <input
                  type='number'
                    id="message"
                    name="message"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData,mobile: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>  
              <div class="p-2 w-full md:w-1/4">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Password
                  </label>
                  <input
                  type='password'
                    id="message"
                    name="message"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData,password: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <button class="flex mt-5 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" >
                  {btnLoading ? <TailSpin height={25} color="white"/> : 'Login'}
                </button>

                <div className='mt-5'>
                  <p>Do not have account ? <Link to={'/signup'}><span className=' text-blue-500 underline'>Sign Up</span></Link></p>
                </div>
    </div>
  )
}

export default Login