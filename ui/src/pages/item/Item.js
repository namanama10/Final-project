import React from 'react'
import { Outlet } from 'react-router-dom'
 

const Item = () => {
  return (
    <div className='my-3'>
      <div className='w-100 my-3 text-center'>
        <div className='flex'>
          <h3>Item</h3>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Item