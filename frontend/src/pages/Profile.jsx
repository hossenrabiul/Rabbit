import React from 'react'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col mt-[124px]'>
        <div className='flex-grow container mx-auto p-4 md:p-6'>
            <div className='flex flex-col md:flex-row space-x-6 space-y-6 md:space-y-0'>
                {/* Left section */}
                <div className='w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-md'>
                    <h1 className='text-3xl sm:text-2xl font-bold mb-3'>Rabiul Hosen</h1>
                    <p className='text-sm font-light mb-2'>RobiulHossen0081@gmail.com</p>
                    <button className='bg-red-600 hover:bg-red-800 w-full py-2 text-white font-bold rounded'>Logout</button>
                </div>
                {/* Right section */}
                <div className='w-full md:w-2/3 lg:w-3/4'>
                     <MyOrdersPage/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Profile