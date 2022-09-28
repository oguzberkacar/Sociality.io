import Image from 'next/image'
import React from 'react'

function Channels({image,id ,state}) {
  return (
    <button 
    onClick={() => {state(id)}}
    className='m-2 border relative overflow-hidden bg-white p-5 w-8 h-8 flex justify-center items-center rounded-lg'>
        <Image src={image} layout='fill' objectFit='cover'/>
    </button>
  )
}

export default Channels