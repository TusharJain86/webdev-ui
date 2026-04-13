import React, { useState } from 'react'
import axios from 'axios';

const Program = () => {

    const [userData, setUserData] = useState([]);
    
    const getData= async()=>{
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
        setUserData(response.data);
    }

    let printUserData = "No user data available"

    if(userData.length > 0){
        printUserData= userData.map(function(){
            return 'hello'
        })
    }

  return (
    <div className='bg-zinc-900 h-screen text-white p-4'>
        <button
        onClick={getData}
        className='bg-green-500 px-5 py-2 rounded mb-3 active:scale-102'>
            Get Data
        </button>

        <div>
            {printUserData}
        </div>
    </div>
  )
}

export default Program