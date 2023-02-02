import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import {
  HomePage, 
  TentangKami
} from '../pages'

const MainContent = () => {
  return(
    <>
    <Routes>
        <Route path="/" element={
          <HomePage></HomePage>
        }></Route>
        <Route path="/TentangKami" element={
          <TentangKami></TentangKami>
        }></Route>
    </Routes>
    </>
  )
}
 

export default MainContent