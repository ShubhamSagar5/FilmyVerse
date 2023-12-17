import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { TailSpin,ThreeDots } from 'react-loader-spinner'
import { doc, getDocs } from 'firebase/firestore'
import { moviesRef } from '../firebase/FireBase'


const Cards = () => {
  
    const [data,setData] = useState([])

    const [loading,setLoading] = useState()

    const getData = async() => {
        setLoading(true)
        const data = await getDocs(moviesRef)
        console.log(data)
        data.forEach((doc) => {
            setData((prev) => [...prev,{...(doc.data()),id:doc.id}])
        })
        setLoading(false)       
    }

    useEffect(()=>{
       
        getData()
    },[])

    return (
    <div className='flex flex-wrap justify-between px-3 mt-2 '>
    { loading ? <div className=' w-full flex justify-center items-center h-96'><ThreeDots height={40} color='white'/> </div> : 
        data.map((e,i) => {
            return (
                <div key={i} className='card shadow-lg rounded-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500'>
            <img className='h-60 md:h-72' src={e.imageUrl} alt="Movie Poster" />
            <p><span className='text-gray-500'>Name :</span>{e.title}</p>
            <p className='flex items-center mr-1'><span className='text-gray-500'>Rating :</span>
            <ReactStars size={20} half={true} value={5} edit={false} /></p>
            <p><span className='text-gray-500'>Year :</span>{e.year}</p>
        </div>
            )
        })
    }
        
        
    </div>
  )
}

export default Cards





// IF- https://www.joblo.com/wp-content/uploads/2023/12/if-poster-400x600.jpg
// Kung Fu Panda 4 -

// Madame web-https://www.joblo.com/wp-content/uploads/2022/08/madame-web-400x600.jpg
// Godzilla x Kong-https://www.joblo.com/wp-content/uploads/2023/08/godzilla-x-kong-2-poster-400x600.jpg
// Deadpool 3 - https://www.joblo.com/wp-content/uploads/2022/12/deadpool-3-400x600.jpg
// Lift-https://www.joblo.com/wp-content/uploads/2023/11/lift-poster-400x600.jpg
// The Family man-https://www.joblo.com/wp-content/uploads/2023/11/the-family-plan-poster-400x600.jpg
// Thanksgiving-https://www.joblo.com/wp-content/uploads/2023/10/thanksgiving-poster-400x600.jpg