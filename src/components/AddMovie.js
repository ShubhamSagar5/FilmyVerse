import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { moviesRef } from "../firebase/FireBase";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { AppState } from "../App";
import ReactStars from "react-stars";

const AddMovie = () => {
  const [rate,setRate] = useState()
  const context = useContext(AppState)
  const navigate = useNavigate()
    const [formData,setFormData] = useState([{
        title:"",
        year:"",
        description:"",
        imageUrl:"",
      
        rating:0
    }])

    
    const [btnLoading,setBtnLoading] = useState(false)
    const addMovie = async() => {
     setBtnLoading(true)   
     try{
         
      if(context.login){
           await addDoc(moviesRef,formData)
        swal({
         title:"Successfully Added",
         icon:"success",
         buttons:'Done',
         timer:3000
        })

        setFormData({
        title:"",
        year:"",
        description:"",
        imageUrl:"",
        rating: 0
        })

        navigate('/')
      
      }else{
        navigate('/login')
      }
   
      }catch(err){
        swal({
          title:err,
          icon:"error",
          buttons:'❌Back',
          timer:8000
         })
      }
     setBtnLoading(false)
    }  

    return (
    <div className="">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">
              Add New Movie
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-300">
                    Title
                  </label>
                  <input
                   
                    type="text"
                    id="name"
                    name="name"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData,title: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    aria-required="true"

                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-300">
                    Year
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.year}
                    onChange={(e)=> setFormData({...formData,year: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    aria-required="true"

                  />
                </div>
              </div>
              {/* <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Rating Out Of 
                  </label>
                  <input
                    type={"number"}
                    id="message"
                    name="message"
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData,rating: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
               */}
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Image Link
                  </label>
                  <input
                    id="message"
                    name="message"
                    aria-required="true"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({...formData,imageUrl: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-300">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-required="true"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData,description: e.target.value})}
                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className=" flex m-auto">
              <ReactStars size={40} half={true} value={formData.rating} onChange={(e)=>setFormData({...formData,rating:e})} />

              </div>

              

              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" onClick={addMovie}>
                  {btnLoading ? <TailSpin height={25} color="white"/> : 'Submit'}
                </button>
              </div>

           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
