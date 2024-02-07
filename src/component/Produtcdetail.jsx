import React, { useState } from 'react'

function Produtcdetail() {
  let [count, updateCount]=useState(0)
  return (
    <div>
      <div className="container">
        <div className="row bg-light my-2 py-2">
          <div className="col-10">
            <h5>Products ALL DETAIL</h5>
          </div>
        </div>

        <div className="row bg-light">
                        <div className="col-4">
                            <img src="https://static-01.daraz.com.np/p/311eefa069f25a52b971f952a3445a18.jpg_300x0q75.webp" alt="" />
                        </div>
                        <div className="col-6">
                            {/* <h6>ID : {stdID} </h6> */}
                            <div className='py-2 fs-5'>Gigaware L01 Semiconductor Mobile Phone Cooling Fan for Mobile Gaming PUBG Phone Cooler</div>
                            <div className=' text-danger fs-5' >Rs. 1100,</div>
                            <div className=''> <del>Rs 2000</del> </div>
                            <div className="py-1">
                              <h1>{count}</h1>
                            <button className='px-2' onClick={()=> updateCount(count+1)}>+</button>
                            <button className='px-2' onClick={()=> updateCount(count-1)}>-</button>
                            </div>
                            <div className='py-2 '>
                              <button className='p-1 bg-info text-light fw-bold'>Buy Now</button>
                              <button className='bg-danger p-1 mx-2 bg-gradient text-light fw-bold'>Add to cart</button>
                            </div>
                            
                          
                        </div>
                    </div>
      </div>
    </div>
  )
}

export default Produtcdetail