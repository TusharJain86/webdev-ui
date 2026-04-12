import React, { useState } from 'react'
import { X } from "lucide-react";
const Report = () => {
  
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const deleteNote =(idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask =[...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

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

        <textarea type='text' className=' outline-none w-full h-32 px-5 py-2 border-2 rounded' placeholder='Write details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}>

        </textarea>

        <button className='bg-white text-black rounded px-5 py-2 w-full outline-none active:scale-102'>Add Notes</button>
      </form>

      <div className=' p-10 lg:w-1/2 bg-gray-900 lg:border-2'>
      <h1 className='text-4xl font-bold text-yellow-300'>Recent Notes and Reports</h1>
      <div className='flex flex-wrap items-start justify-start mt-5 gap-5 h-[90%] overflow-auto'>
        {task.map(function(elem, idx){
          return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 relative rounded text-black py-9 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover'>
            <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full mt-5 bg-red-600 py-1 text-xs rounded font-bold text-white cursor-pointer active:scale-102'> Delete</button>
          </div>
        })}
        
        </div>
      </div>
    </div>
  )
}

export default Report