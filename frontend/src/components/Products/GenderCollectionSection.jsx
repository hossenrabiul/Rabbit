import React from 'react'
import womens from '../../assets/Reddit/womens-collection.webp'
import mans from '../../assets/Reddit/mens-collection.webp'
import { Link } from 'react-router-dom'
const GenderCollectionSection = () => {
  return (
    <section className='container mx-auto py-16 px-4 lg:px-0 flex flex-col md:flex-row gap-8'>
        <div className='flex flex-1 relative'>
            <img src={womens} alt="women's" className='w-full h-[600px] object-cover' />
            <div  className='absolute left-8 bottom-8 p-2 bg-white rounded'>
                <h3 className='text-sm font-bold'>Women's Collection</h3>
                <Link to={"collections/all?gender=women"} className='text-sm font-bold underline'>Shop Now</Link>
            </div>
        </div>
        <div className='flex flex-1 relative'>
            <img src={mans} alt="women's" className='w-full h-[600px] object-cover' />
            <div  className='absolute left-8 bottom-8 p-2 bg-white rounded'>
                <h3 className='text-sm font-bold'>Men's Collection</h3>
                <Link to={"collections/all?gender=women"} className='text-sm font-bold underline'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection