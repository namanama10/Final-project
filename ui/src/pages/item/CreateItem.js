import React, { useState } from 'react'
import { addItem } from '../../axios/itemAxios'
import { useNavigate } from 'react-router-dom'

const CreateItem = () => {
  const [form, setForm] = useState({
    nama: "",
    type_kendaraan: "",
    type_transmisi: "",
    warna: "",
    kapasitas_kendaraan: "",
    gambar: "http://via.placeholder.com/100",
    userId: 3,
    brandId: ""
  })

  const navigation = useNavigate()

  const submitHandler = () => {
    addItem(form)
    navigation('/items')
  }

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
        <h5>Create Item</h5>
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
          <label>Type kendaraan: </label>
          <input
          onChange={(e) => setForm({ ...form, type_kendaraan: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Type transmisi: </label>
          <input
          onChange={(e) => setForm({ ...form, type_transmisi: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>warna: </label>
          <input
          onChange={(e) => setForm({ ...form, warna: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Kapasistas kendaraan: </label>
          <input
          onChange={(e) => setForm({ ...form, kapasitas_kendaraan: e.target.value})}
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
          <label>BrandId: </label>
          <input
          onChange={(e) => setForm({ ...form, brandId: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>UserId: </label>
          <input
          disabled
          onChange={(e) => setForm({ ...form, userId: e.target.value})}
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

export default CreateItem