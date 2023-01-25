import React, { useState } from 'react'
import { addBrand } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'

const CreateBrand = () => {
  const [form, setForm] = useState({
    nama: "",
    country: "",
    gambar: "http://via.placeholder.com/100"
  })

  const navigation = useNavigate()

  const submitHandler = () => {
    addBrand(form)
    navigation('/brands')
  }

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
        <h5>Create Brand</h5>
        <hr/>
      </div>
      <div className='w-50 mx-auto'>
        <div className='mb-3'>
          <label>Nama: </label>
          <input
          onChange={(e) => setForm({ ...form, nama: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Country: </label>
          <input
          onChange={(e) => setForm({ ...form, country: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Gambar: </label>
          <input
          onChange={(e) => setForm({ ...form, gambar: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Submit</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateBrand