import React, { useState } from 'react'

const Report = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(title);

    setTitle("")
  }

  const [title, setTitle] = useState("")

  return (
    <div className='h-screen bg-zinc-900 text-white lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-10 flex lg:w-1/2 flex-col items-start gap-4'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input type='text' placeholder='Enter data' className=' outline-none w-full px-5 py-2 border-2 rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>

        <textarea type='text' className=' outline-none w-full h-32 px-5 py-2 border-2 rounded' placeholder='Write details'></textarea>

        <button className='bg-white text-black rounded px-5 py-2 w-full outline-none '>Add Notes</button>
      </form>

      <div className=' p-10 lg:w-1/2 bg-gray-900 lg:border-2'>
      <h1 className='text-4xl font-bold text-yellow-300'>Recent Notes and Reports</h1>
      <div className='flex flex-wrap mt-5 gap-5 h-full overflow-auto'>
        <div className='h-55 w-45 bg-white rounded'></div>
        <div className='h-55 w-45 bg-white rounded'></div>
      </div>
      </div>
    </div>
  )
}

export default Report