import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Cards = () => {
  
    const [data,setData] = useState([
        {
            name:"Laggan",
            rating:"2",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"1",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"4",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"5",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"1",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"2",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
        {
            name:"Laggan",
            rating:"3",
            year:"2001",
            img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
        },
    ])

    return (
    <div className='flex flex-wrap justify-between p-3 mt-2 '>
    {
        data.map((e,i) => {
            return (
                <div key={i} className='card shadow-lg rounded-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500'>
            <img className='h-72' src={e.img} alt="Movie Poster" />
            <p><span className='text-gray-500'>Name :</span>{e.name}</p>
            <p className='flex items-center mr-1'><span className='text-gray-500'>Rating :</span>
            <ReactStars size={20} half={true} value={e.rating} edit={false} /></p>
            <p><span className='text-gray-500'>Year :</span>{e.year}</p>
        </div>
            )
        })
    }
        
        
    </div>
  )
}

export default Cards