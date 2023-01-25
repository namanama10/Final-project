import React, {useState, useEffect} from 'react'
import { accountItem, editItem } from '../../axios/itemAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditItem = () => {
  const [form, setForm] = useState({
    nama: "",
    type_kendaraan: "",
    type_transmisi: "",
    warna: "",
    kapasitas_kendaraan: "",
    gambar: "http://via.placeholder.com/100",
    brandId: 1,
    userId: 3
  })

  const navigation = useNavigate()
  const params = useParams()

  const getItemInfo = () => {
    const { id } = params
    accountItem(+id, result => {
        setForm({
            nama: result.nama,
            type_kendaraan: result.type_kendaraan,
            type_transmisi: result.type_transmisi,
            warna: result.warna,
            kapasitas_kendaraan: result.kapasitas_kendaraan,
            gambar: result.gambar,
            brandId: result.brandId,
            userId: result.userId
        })
        console.log(result)
    })
  }

  useEffect(() => {
    getItemInfo()
  }, [])


  const submitHandler = () => {
    editItem(+params.id,form)
    navigation('/items')
  }

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
        <h5>Edit Item</h5>
      </div>
      <div className='w-75 mx-auto'>
        <div className='mb-3'>
          <label>Nama: </label>
          <input
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Type Kendaraan: </label>
          <input
          value={form.type_kendaraan}
          onChange={(e) => setForm({ ...form, type_kendaraan: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Type Transmisi: </label>
          <input
          value={form.type_transmisi}
          onChange={(e) => setForm({ ...form, type_transmisi: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Warna: </label>
          <input
          value={form.warna}
          onChange={(e) => setForm({ ...form, warna: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>kapasitas Kendaraan: </label>
          <input
          value={form.kapasitas_kendaraan}
          onChange={(e) => setForm({ ...form, kapasitas_kendaraan: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Gambar: </label>
          <input
          value={form.gambar}
          onChange={(e) => setForm({ ...form, gambar: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Brand ID: </label>
          <input
          value={form.brandId}
          onChange={(e) => setForm({ ...form, brandId: e.target.value})}
          type="text"
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>User ID: </label>
          <input
          disabled
          value={form.userId}
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

export default EditItem