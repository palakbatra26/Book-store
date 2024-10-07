import React from 'react'
function Cards({item}) {
    console.log(item);
  return (
    <>
  <div className='mt-4 my-7 mb-6'>
  <div className="card bg-base-300 w-96 shadow-xl hover:scale-105 duration-200 m-4"> {/* Added margin */}
    <figure>
      <img src={item.image} alt="Book Image" />
    </figure>
    <div className="card-body p-6">
      <h2 className="card-title">
        {item.name}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{item.title}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">${item.price}</div>
        <div className="badge badge-outline cursor-pointer p-3 rounded-lg hover:bg-pink-800 duration-500 hover:text-white hover:px-2 py-1">Buy Now</div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Cards