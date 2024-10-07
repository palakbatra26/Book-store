import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import  { Link } from 'react-router-dom'
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4  '>
<div className='mt-40 items-center text-center justify-center space-y-7'>
  <h1 className='   text-2xl  md:text-4xl '>We're  delighted to have  you <span className='text-pink-600'>Here:)</span> </h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, beatae neque, esse ipsum nisi molestias soluta officia molestiae illum laudantium magnam optio tempore ducimus quae et non nostrum inventore? Beatae dolor quod suscipit possimus distinctio. Et ipsam aliquid explicabo minus illo est in inventore culpa voluptate!</p>
<Link to="/" >
  <button className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-500 mt-6">Back</button></Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap:10 md:gap-30 lg:gap-20 '> {/* Increased gap */}
  {list.map((item) => (
    <Cards key={item.id} item={item} />
  ))}
   </div>
   </div>
   </>
  )
}

export default Course