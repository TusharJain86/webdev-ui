import React from 'react'

const Report = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form submitted");
  }

  return (
    <div className='h-screen bg-zinc-900 text-white lg:flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='p-10 flex lg:w-1/2 flex-col items-start gap-4'>
        <input type='text' placeholder='Enter data' className=' outline-none w-full px-5 py-2 border-2 rounded'/>
        <textarea type='text' className=' outline-none w-full h-32 px-5 py-2 border-2 rounded' placeholder='Write details'></textarea>
        <button className='bg-white text-black rounded px-5 py-2 w-full outline-none '>Add Notes</button>
      </form>

      <div className=' p-10 lg:w-1/2 bg-gray-900 '>
      <h1 className='text-xl font-bold text-yellow-300'>Your Notes and Reports</h1>
      <div className='flex flex-wrap mt-5 gap-5'>
        <div className='h-55 w-45 bg-white rounded'></div>
        <div className='h-55 w-45 bg-white rounded'></div>
      </div>
      </div>
    </div>
  )
}

export default Report