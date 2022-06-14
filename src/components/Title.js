import React from 'react'

export default function Title(props) {
  return (
    <div className="m-auto">
    <p className='text-black text-[15px] font-bold mb-[15px]'>
        {props.title}
    </p>
    </div>
  )
}
