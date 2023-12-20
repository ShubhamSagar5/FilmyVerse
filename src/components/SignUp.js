import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
import app, { usersRef } from '../firebase/FireBase'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
// import {bcrypt} from 'bcryptjs'

const auth = getAuth(app)
var bcrypt = require('bcryptjs');
const SignUp = () => {
 
  const navigate = useNavigate()
 
  const [formData,setFormData] = useState({
    name:"",
    mobile:"",
    password:""
  })

  const [btnLoading,setBtnLoading] = useState(false)
  const [otpSend,setOtpSend] = useState(false)
  const [OTP,setOTP] = useState("")
 
  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {

      }
    }, auth)
  }
 
  const requestOtp = () => {
    setBtnLoading(true)
    generateRecaptha()
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth,`+91${formData.mobile}`,appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      swal({
        text: "OTP Sent",
        icon: "success",
        buttons: false,
        timer: 3000,
      })
      setOtpSend(true)
      setBtnLoading(false)
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error)
    });
  }

  const verifyOTP = async() => {
    try{
      setBtnLoading(true)
      window.confirmationResult.confirm(OTP).then((result)=> {
      
        uploadData()
   
      swal({
        text: "Registered Successfully",
        icon: "success",
        buttons: false,
        timer: 3000,
      })
      navigate('/login')
      setBtnLoading(false)
     } )

    }catch(err){
      console.log(err)
    }
  }

  const uploadData = async () => {
    try{
      var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(formData.password, salt);
    
    await addDoc(usersRef, {
      name:formData.name,
      mobile:formData.mobile,
      password:hash
    })
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className='w-full mt-8 flex flex-col justify-center items-center'>
      <h1 className='text-xl font-bold '>Sign Up</h1>
      {
        otpSend ? <>
        <div className="p-2 w-full md:w-1/4">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                  Enter OTP
                  </label>
                  <input
                  type='number'
                    id="message"
                    name="message"
                    
                    onChange={(e) => setOTP(e.target.value)}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div> 
              <button className="flex mt-5 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"  onClick={verifyOTP}>
                  {btnLoading ? <TailSpin height={25} color="white"/> : 'Verfiy OTP'}
                </button> 
        </> : 
        <>

              <div className="p-2 w-full md:w-1/4">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                  Name
                  </label>
                  <input
                  type='text'
                    id="message"
                    name="message"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData,name: e.target.value})}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>  
              <div className="p-2 w-full md:w-1/4">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                  Mobile No
                  </label>
                  <input
                  type='number'
                    id="message"
                    name="message"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData,mobile: e.target.value})}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>  
              <div className="p-2 w-full md:w-1/4">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                    Password
                  </label>
                  <input
                  type={'password'}
                    id="message"
                    name="message"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData,password: e.target.value})}
                    className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  
                  ></input>
                </div>
              </div>
              <button className="flex mt-5 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" onClick={requestOtp} >
                  {btnLoading ? <TailSpin height={25} color="white"/> : 'Request OTP'}
                </button>

        </>
      }
                <div className='mt-5'>
                  <p>Already have an account ? <Link to={'/login'}><span className=' text-blue-500 underline'>Login</span></Link></p>
                </div>
                <div id='recaptcha-container'>

                </div>
    </div>
  )
}

export default SignUp