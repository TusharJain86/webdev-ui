import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Program = () => {

    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1)
    
    const getData= async()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
        setUserData(response.data);
    }

    useEffect(function(){
        getData()
    }, [index])

    let printUserData = <h3 className='text-gray-300 text lg absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-bold'>Loading...</h3>

    if(userData.length > 0){
        printUserData= userData.map(function(elem, idx){
            return <div key={idx}>
                <div className='h-40 w-45 bg-white overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={elem.download_url} alt=""></img>
                </div>
                <h2 className='font-bold text-lg'>{elem.author}</h2>
            </div>
        })
    }

  return (
    <div className='bg-zinc-900 overflow-auto h-screen text-white p-4'>
        
        <div className='flex flex-wrap gap-4'>
            {printUserData}
        </div>
        <div className='flex justify-center items-center p-4 gap-6'>
            <button
            onClick={()=>{
                if(index>1){
                    setIndex(index-1)
                    setUserData([])
                }
            }} 
            className='bg-amber-400 rounded cursor-pointer active:scale-102 text-black font-bold px-4 py-2'>
                Previous
            </button>
            <h4>Page {index}</h4>
            <button
            onClick={()=>{
                setIndex(index+1)
                setUserData([])
            }} 
            className='bg-amber-400 rounded cursor-pointer active:scale-102 text-black font-bold px-4 py-2'>
                Next
            </button>
        </div>
    </div>
  )
}

export default Program