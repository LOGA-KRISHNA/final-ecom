import React from 'react'

const Card = ({imageurl,title}) => {
  return (
    <div className='flex flex-col p-8'>
        <img src={imageurl}
            alt="image"
            className="max-h-[260px] max-w-[240px] min-h-[260px] min-w-[240px] bg-cover bg-center border rounded hover:scale-110"
        />
        <p className='text-[16px] p-[5px]'>{title}</p>
    </div>
  )
}

export default Card