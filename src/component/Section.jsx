import React from 'react'
import Productitem from './Productitem'
import { Route, Routes } from 'react-router-dom'
import Produtcdetail from './Produtcdetail'

function Section() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Productitem />} />
        <Route path='/product-details' element={<Produtcdetail/>} />
      </Routes>



    </div>
  )
}

export default Section