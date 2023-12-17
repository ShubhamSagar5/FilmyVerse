import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/FireBase'
import { addDoc } from 'firebase/firestore'
import { TailSpin } from 'react-loader-spinner'
import swal from 'sweetalert'


const Review = ({id}) => {
  const [rating,setRating] = useState()
  const [loading,setLoading] = useState(false)
  const [formComment,setFormComment] = useState("")

  const sendReview = async() => {
    setLoading(true)
    try{
        await addDoc(reviewsRef,{
            moviesId: id, 
            comment: formComment,
            name: "Shubham",
            rating: rating,
            timestamp: new Date().getTime()
        })
        swal({
            title:"Review Send",
            icon: "success",
            buttons: 'Done',
            timer:3000
        })
        setRating()
        setFormComment("")
       
    }catch(err){
        swal({
            title:err.message,
            icon: "success",
            buttons: 'Back',
            timer:3000
        })
    } 
    setLoading(false)
  }

    return (
    <div className='mt-4 py-2 border-t-2 border-gray-700 w-[70%] '>
        <ReactStars size={35} half={true} value={rating}  onChange={(rate)=> setRating(rate)}/>

        <div className='flex'>
            <input type="text" 
            value={formComment}
            onChange={(e)=> setFormComment(e.target.value)}
            placeholder='Write your Comment...'
            className='w-full p-2 outline-none header rounded-lg'
        />
        <button className='bg-green-600 p-2 outline-none ml-2 rounded-lg' onClick={sendReview}>{loading ? <TailSpin height={15} color='white'/> : 'Comment'}</button>
        </div>
        
    </div>
  )
}

export default Review