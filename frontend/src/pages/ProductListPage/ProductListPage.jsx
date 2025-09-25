import React from 'react'
import {SlidersHorizontal } from 'lucide-react'
const ProductListPage = () => {
  return (
    <div className='flex flex'>
      <div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
        <div className='flex justify-between'>
          <p className='text-gray-600 text-[16px]'>Filter</p>
          <SlidersHorizontal className='text-gray-600'/>
        </div>
      </div>
      <div>
        <p>fasdfa</p>
      </div>
    </div>
  )
}

export default ProductListPage