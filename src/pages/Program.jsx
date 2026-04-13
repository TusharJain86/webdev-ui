import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Program = () => {

    const [userData, setUserData] = useState([]);
    
    const getData= async()=>{
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
        setUserData(response.data);
    }

    useEffect(function(){
        getData()
    })

    let printUserData = "No user data available"

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
    </div>
  )
}

export default Program